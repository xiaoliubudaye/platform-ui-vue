import { ATTACHMENT_TYPES } from '@commons/core/utils/constants';

export class AttachmentEntity {
    /**
     * 目标实体
     */
    targetId?: number | string = 0;
    /**
     * 目标类型
     */
    targetType?: string = '';
    /**
     * 附件类型
     */
    attachmentType?: AttachmentType = ATTACHMENT_TYPES.UNSPECIFIED;
    /**
     * 附件文件ID列表
     */
    fileIdList?: number[] = [];
    /**
     * 附件文件列表
     */
    fileList?: AttachmentFileEntity[] = [];

    constructor(targetType = '') {
        this.targetType = targetType;
    }
}

export class AttachmentFileEntity {
    /**
     * ID
     */
    id?: number = 0;
    /**
     * 当前文件名
     */
    filename?: string = '';
    /**
     * 原始文件名
     */
    original_filename?: string = '';
    /**
     * 文件链接
     */
    url?: string = '';
}

export class AttachmentType {
    /**
     * 附件类型
     */
    type?: string = '';
    /**
     * 是否支持多文件
     */
    multiple?: boolean = false;
    /**
     * 支持扩展名
     */
    ext?: string[] = [];
}
