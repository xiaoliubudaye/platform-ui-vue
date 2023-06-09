import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { log } from '@commons/core/utils';

export const useProgress = () => {
    const progressStart = () => {
        log(`nProgress Start...`);
        NProgress.start();
    };

    const progressDone = () => {
        log(`nProgress Done.`);
        NProgress.done();
    };

    return {
        progressStart,
        progressDone,
    };
};
