import Layout from '../Layout'
import { withRouter } from 'react-router-dom';

function Login(){

    
    return  (
        <Layout>
            <div class="wrap">
                <form action="http://localhost:8000/get-data" method="POST">
                    <div>
                        <label>
                            <div>아이디</div>
                            <input type="text" name="user_id" placeholder="아이디를 입력해주세요."/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <div>비밀번호</div>
                            <input type="password" name="user_pw" placeholder="비밀번호를 입력해주세요."/>
                        </label>
                        
                    </div>
                    <div>
                        <input type="submit" value="로그인"/>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
export default withRouter(Login);