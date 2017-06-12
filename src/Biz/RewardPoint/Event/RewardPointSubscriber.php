<?php

namespace Biz\RewardPoint\Event;

use Codeages\Biz\Framework\Event\Event;
use Codeages\PluginBundle\Event\EventSubscriber;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Http\SecurityEvents;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;

class RewardPointSubscriber extends EventSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return array(
            'course.thread.create' => 'onCourseThreadCreate',
            'thread.create' => 'onThreadCreate',
            'course.thread.post.create' => 'onCourseThreadPostCreate',
            'thread.post.create' => 'onThreadPostCreate',
            'course.thread.elite' => 'onCourseThreadElite',
            'thread.nice' => 'onThreadNice',
            'course.review.update' => 'onCourseReviewUpdate',
            'classReview.add' => 'onClassReviewAdd',
            'course.task.finish' => 'onCourseTaskFinish',
            SecurityEvents::INTERACTIVE_LOGIN => 'onSecurityInteractiveLogin',
        );
    }

    public function onCourseThreadCreate(Event $event)
    {
        $thread = $event->getSubject();
        $params = array(
            'way' => ($thread['type'] == 'question') ? 'create_question' : 'create_discussion',
            'targetId' => $thread['id'],
            'targetType' => 'course_thread',
        );

        $commonAcquireRewardPoint = $this->getRewardPointFactory('common-acquire');
        $commonAcquireRewardPoint->circulatingRewardPoint($params);
    }

    public function onThreadCreate(Event $event)
    {
        $thread = $event->getSubject();
        $params = array(
            'way' => ($thread['type'] == 'question') ? 'create_question' : 'create_discussion',
            'targetId' => $thread['id'],
            'targetType' => 'thread',
        );

        $commonAcquireRewardPoint = $this->getRewardPointFactory('common-acquire');
        $commonAcquireRewardPoint->circulatingRewardPoint($params);
    }

    public function onCourseThreadPostCreate(Event $event)
    {
        $post = $event->getSubject();
        $thread = $this->getCourseThreadService()->getThread($post['courseId'], $post['threadId']);
        $params = array(
            'way' => ($thread['type'] == 'question') ? 'reply_question' : 'reply_discussion',
            'targetId' => $post['id'],
            'targetType' => 'course_thread_post',
        );

        $commonAcquireRewardPoint = $this->getRewardPointFactory('common-acquire');
        $commonAcquireRewardPoint->circulatingRewardPoint($params);
    }

    public function onThreadPostCreate(Event $event)
    {
        $post = $event->getSubject();
        $thread = $this->getThreadService()->getThread($post['threadId']);
        $params = array(
            'way' => ($thread['type'] == 'question') ? 'reply_question' : 'reply_discussion',
            'targetId' => $post['id'],
            'targetType' => 'thread_post',
        );

        $commonAcquireRewardPoint = $this->getRewardPointFactory('common-acquire');
        $commonAcquireRewardPoint->circulatingRewardPoint($params);
    }

    public function onCourseThreadElite(Event $event)
    {
        $thread = $event->getSubject();
        $params = array(
            'way' => 'elite_thread',
            'targetId' => $thread['id'],
            'targetType' => 'course_thread_elite',
        );

        $commonAcquireRewardPoint = $this->getRewardPointFactory('common-acquire');
        $commonAcquireRewardPoint->circulatingRewardPoint($params);
    }

    public function onCourseTaskFinish(Event $event)
    {
        $taskResult = $event->getSubject();
        $courseAcquireRewardPoint = $this->getRewardPointFactory('course-acquire');
        $courseAcquireRewardPoint->circulatingRewardPoint($taskResult['courseTaskId']);
    }

    public function onThreadNice(Event $event)
    {
        $thread = $event->getSubject();
        $params = array(
            'way' => 'elite_thread',
            'targetId' => $thread['id'],
            'targetType' => 'thread_nice',
        );

        $commonAcquireRewardPoint = $this->getRewardPointFactory('common-acquire');
        $commonAcquireRewardPoint->circulatingRewardPoint($params);
    }

    public function onCourseReviewUpdate(Event $event)
    {
        $review = $event->getSubject();
        $params = array(
            'way' => 'appraise_course_classroom',
            'targetId' => $review['id'],
            'targetType' => 'course_review_update',
        );

        $commonAcquireRewardPoint = $this->getRewardPointFactory('common-acquire');
        $commonAcquireRewardPoint->circulatingRewardPoint($params);
    }

    public function onClassReviewAdd(Event $event)
    {
        $review = $event->getSubject();
        $params = array(
            'way' => 'appraise_course_classroom',
            'targetId' => $review['id'],
            'targetType' => 'classroom_review_add',
        );

        $commonAcquireRewardPoint = $this->getRewardPointFactory('common-acquire');
        $commonAcquireRewardPoint->circulatingRewardPoint($params);
    }

    public function onSecurityInteractiveLogin(InteractiveLoginEvent $event)
    {

    }

    protected function getCourseThreadService()
    {
        return $this->getBiz()->service('Course:ThreadService');
    }

    protected function getThreadService()
    {
        return $this->getBiz()->service('Thread:ThreadService');
    }

    protected function getRewardPointFactory($type)
    {
        $biz = $this->getBiz();
        if (!isset($biz["reward_point.{$type}"])) {
            return null;
        }

        return $biz["reward_point.{$type}"];
    }
}
