import { ATTACHMENT_TYPES } from '@commons/core/utils/constants';
import { AttachmentEntity } from '@commons/core/types/attachment.type';

export class UserEntity {
    /**
     * ID
     */
    id?: number = 0;
    /**
     * 用户名
     */
    username?: string = '';
    /**
     * 昵称
     */
    display_name?: string = '';
    /**
     * 全名
     */
    name?: string = '';
    /**
     * 电子邮箱
     */
    email?: string = '';
    /**
     * 手机号码
     */
    mobile?: string = '';
    /**
     * 手机号码
     */
    birthday?: string = '';
    /**
     * 手机号码
     */
    sex?: string = 'U';
    /**
     * 手机号码
     */
    description?: string = '';
    /**
     * 用户状态
     */
    status?: boolean = false;
    /**
     * 启用状态
     */
    active?: string = '';
    /**
     * 用户头像
     */
    avatar?: AttachmentEntity = new AttachmentEntity(ATTACHMENT_TYPES.USER_AVATAR.type);
    /**
     * 创建时间
     */
    created_at?: Date | null = null;
    /**
     * 创建人
     */
    created_by?: number | null = null;
    /**
     * 更新时间
     */
    updated_at?: Date | null = null;
    /**
     * 更新人
     */
    updated_by?: number | null = null;
    /**
     * 删除时间
     */
    deleted_at?: Date | null = null;
    /**
     * 删除人
     */
    deleted_by?: number | null = null;
}
