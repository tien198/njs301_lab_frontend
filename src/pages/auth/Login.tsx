import type { IErrorRes } from '../../models/interfaces/errorRes';

import styles from './authen.module.css';

import { Form, Link, useActionData } from 'react-router-dom';

import ErrorMsg from '../../components/layouts/ErrorMsg';
import { shopRouteURL_Absolute } from '../../utilities/RouteUlti/routeUrl';



export default function Login() {
    const actionData: IErrorRes | undefined = useActionData()
    let errorEntries: [string, string][] = []
    if (actionData?.errors)
        errorEntries = Object.entries(actionData.errors)
    return (
        <div className={styles['container']}>
            <h2 className={styles['title']}>Login</h2>
            <Form className={styles['form']} method="post">
                <input name='email' type="text" placeholder="Email" className={styles['input']} />
                <input name='password' type="password" placeholder="Password" className={styles['input']} />
                {errorEntries.map(i =>
                    <ErrorMsg msg={i[1]} />
                )
                }
                <button type="submit" className={styles['button']}>Login</button>
            </Form>
            <Link className={styles['link']}
                to={shopRouteURL_Absolute.resetPassword}>Forgot password?</Link>
        </div>
    );
}
