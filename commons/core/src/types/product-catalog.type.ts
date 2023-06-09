import { AttachmentEntity } from '@commons/core/types/attachment.type';
import { ATTACHMENT_TYPES } from '@commons/core/utils/constants';

export class ProductCatalogEntity {
    /**
     * ID
     */
    id?: number;
    /**
     * 编号
     */
    code?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 内容简介
     */
    content?: string;
    /**
     * 描述备注
     */
    description?: string;
    /**
     * 目录封面
     */
    cover?: AttachmentEntity = new AttachmentEntity(ATTACHMENT_TYPES.PRODUCT_CATALOG_COVER.type);
    /**
     * 目录文件
     */
    files?: AttachmentEntity = new AttachmentEntity(ATTACHMENT_TYPES.PRODUCT_CATALOG_FILES.type);
    /**
     * 发布状态
     */
    status?: number;
    /**
     * 启用状态
     */
    active?: number;
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
