import express from 'express';
import debug from 'debug';
import {PermissionFlag} from "../../auth/middleware/permissionflag.enum";

const log: debug.IDebugger = debug('app:common-permission-middleware');
class CommonPermissionMiddleware {
    permissionFlagRequired(requiredPermissionFlag: PermissionFlag) {
        return (
            req: express.Request, res: express.Response, next: express.NextFunction
        ) => {
            try {
                const userPermissionFlag = parseInt(res.locals.jwt.permissionFlags);
                if (userPermissionFlag & requiredPermissionFlag) {
                    next();
                } else {
                    res.status(403).send();
                }
            } catch (err) {
                log(err);
            }
        }
    }

    async onlySameUserOrAdminCanDoThisAction(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const userPermissionFlags = parseInt(res.locals.jwt.permissionFlags);
        if (
            req.params &&
            req.params.userId &&
            req.params.userId === res.locals.jwt.userId
        ) {
            return next();
        } else {
            if (userPermissionFlags & PermissionFlag.ADMIN_PERMISSION) {
                return next();
            } else {
                return res.status(403).send();
            }
        }
    }
}

export default new CommonPermissionMiddleware();
