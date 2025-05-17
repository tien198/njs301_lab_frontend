import type { IErrorRes } from '../../../models/interfaces/response/error';
import type IAuthError from '../../../models/interfaces/response/error/authError';

import styles from '../authen.module.css';

import { Form, Link, useActionData } from 'react-router-dom';

import ErrorMsg from '../../../components/layouts/ErrorMsg';
import { shopRouteURL_Absolute } from '../../../utilities/RouteUlti/routeUrl';



export default function Login() {
    const actionData: IErrorRes<IAuthError> | undefined = useActionData()

    return (
        <div className={styles['container']}>
            <h2 className={styles['title']}>Login</h2>
            <Form className={styles['form']} method="post">
                <input name='email' type="text" placeholder="Email" className={styles['input']} />
                {actionData?.cause?.email && <ErrorMsg msg={actionData?.cause?.email} />}

                <input name='password' type="password" placeholder="Password" className={styles['input']} />
                {actionData?.cause?.password && <ErrorMsg msg={actionData?.cause?.password} />}
                {actionData?.cause?.credential && <ErrorMsg msg={actionData?.cause?.credential} />}

                <button type="submit" className={styles['button']}>Login</button>
            </Form>
            <Link className={styles['link']}
                to={shopRouteURL_Absolute.resetPassword}>
                Forgot password?
            </Link>
        </div>
    );
}
