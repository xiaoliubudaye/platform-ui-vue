import { ATTACHMENT_TYPES } from '@commons/core/utils/constants';
import { formatUrl } from '@commons/core/utils';
import { AttachmentEntity } from '@commons/core/types/attachment.type';
import { TagRelation } from '@commons/core/types/tag.type';

export default class ProductEntity {
    /**
     * ID
     */
    id?: number = 0;

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
     *
     */
    tag?: TagRelation = new TagRelation();

    /**
     * 封面图片
     */
    cover?: AttachmentEntity = new AttachmentEntity(ATTACHMENT_TYPES.PRODUCT_COVER.type);

    /**
     * 介绍图片集
     */
    pictures?: AttachmentEntity = new AttachmentEntity(ATTACHMENT_TYPES.PRODUCT_PICTURES.type);

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

    /**
     *
     */
    get coverUrl(): string {
        if (this.cover && this.cover.fileList && this.cover.fileList.length) {
            console.log(formatUrl(this.cover.fileList[0].url));
            return formatUrl(this.cover.fileList[0].url);
        }
        return '';
    }
}

export function getProductCover(productEntity: ProductEntity): string {
    if (productEntity && productEntity.cover && productEntity.cover.fileList && productEntity.cover.fileList.length) {
        console.log(formatUrl(productEntity.cover.fileList[0].url));
        return formatUrl(productEntity.cover.fileList[0].url);
    }
    return '';
}
