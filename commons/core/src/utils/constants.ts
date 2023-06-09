/**
 * 系统支持附件类型定义
 */
export const ATTACHMENT_TYPES: { [key: string]: any } = {
    /**
     * 未指定
     */
    UNSPECIFIED: {
        type: 'UNSPECIFIED',
        multiple: false,
        ext: [],
    },
    /**
     * 产品图片
     */
    PRODUCT_COVER: {
        type: 'PRODUCT_COVER',
        multiple: false,
        ext: ['png', 'jpeg', 'jpg', 'git'],
    },
    /**
     * 产品封面图片
     */
    PRODUCT_PICTURES: {
        type: 'PRODUCT_PICTURES',
        multiple: true,
        ext: ['png', 'jpeg', 'jpg', 'git'],
    },
    /**
     * 产品目录文件
     */
    PRODUCT_CATALOG_COVER: {
        type: 'PRODUCT_CATALOG_COVER',
        multiple: false,
        ext: ['png', 'jpeg', 'jpg', 'git'],
    },
    /**
     * 产品目录封面图片
     */
    PRODUCT_CATALOG_FILES: {
        type: 'PRODUCT_CATALOG_FILES',
        multiple: true,
        ext: ['png', 'jpeg', 'jpg', 'git'],
    },
    /**
     * 用户头像
     */
    USER_AVATAR: {
        type: 'USER_AVATAR',
        multiple: false,
        ext: ['png', 'jpeg', 'jpg', 'git'],
    },
};
