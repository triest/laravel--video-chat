<?php
/**
 * Created by PhpStorm.
 * User: nyinyilwin
 * Date: 10/22/17
 * Time: 12:05 AM.
 */

namespace Wqqas1\LaravelVideoChat\Models\Group\Conversation\Relationship;

use Wqqas1\LaravelVideoChat\Models\File\File;
use Wqqas1\LaravelVideoChat\Models\Message\Message;

trait GroupConversationRelationship
{
    /**
     * @return mixed
     */
    public function users()
    {
        return $this->belongsToMany(
            config('laravel-video-chat.user.model'),
            config('laravel-video-chat.table.group_users_table'),
            'group_conversation_id',
            'user_id'
        );
    }

    /**
     * @return mixed
     */
    public function messages()
    {
        return $this->morphMany(Message::class, 'conversation');
    }

    /**
     * @return mixed
     */
    public function files()
    {
        return $this->morphMany(File::class, 'conversation');
    }
}
