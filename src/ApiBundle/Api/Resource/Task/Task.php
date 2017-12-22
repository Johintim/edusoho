<?php

namespace ApiBundle\Api\Resource\Task;

use ApiBundle\Api\Annotation\ApiConf;
use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use AppBundle\Common\ArrayToolkit;
use ApiBundle\Api\Exception\ErrorCode;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class Task extends AbstractResource
{
    /**
     * @ApiConf(isRequiredAuth=false)
     */
    public function search(ApiRequest $request)
    {
        $conditions = $request->query->all();
        if (empty($conditions['start']) || empty($conditions['end'])) {
            throw new BadRequestHttpException('Params missing', null, ErrorCode::INVALID_ARGUMENT);
        }
        $user = $this->getCurrentUser();
        $tasks = $this->getLiveTask($conditions, $user['id']);
        $openCourses = $this->getOpenLiveLesson($conditions, $user['id']);
        return array_merge($tasks, $openCourses);
    }

    protected function getLiveTask($conditions, $userId)
    {
        $members = $this->getMemberService()->searchMembers(
            array('userId' => $userId, 'role' => 'teacher'),
            array(),
            0,
            PHP_INT_MAX
        );
        $courseIds = ArrayToolkit::column($members, 'courseId');
        if (empty($courseIds)) {
            $courseIds = array(-1);
        }
        $tasks = $this->getTaskService()->searchTasks(
            array('courseIds' => $courseIds, 'type' => 'live', 'startTime_GE' => $conditions['start'], 'endTime_LT' => $conditions['end'], 'status' => 'published'),
            array(),
            0,
            PHP_INT_MAX
        );
        return $tasks;
    }

    protected function getOpenLiveLesson($conditions, $userId)
    {
        $members = $this->getOpenCourseService()->searchMembers(
            array('userId' => $userId, 'role' => 'teacher'),
            array(),
            0,
            PHP_INT_MAX
        );
        $courseIds = ArrayToolkit::column($members, 'courseId');
        if (empty($courseIds)) {
            $courseIds = array(-1);
        }
        $openCourses = $this->getOpenCourseService()->searchLessons(
            array('courseIds' => $courseIds, 'type' => 'liveOpen', 'startTimeGreaterThan' => $conditions['start'], 'endTimeLessThan' => $conditions['end'], 'status' => 'published'),
            array(),
            0,
            PHP_INT_MAX
        );
        return $openCourses;
    }

    /**
     * @return MemberService
     */
    private function getMemberService()
    {
        return $this->service('Course:MemberService');
    }

    /**
     * @return TaskService
     */
    private function getTaskService()
    {
        return $this->service('Task:TaskService');
    }

    /**
     * @return OpenCourseService
     */
    private function getOpenCourseService()
    {
        return $this->service('OpenCourse:OpenCourseService');
    }
}