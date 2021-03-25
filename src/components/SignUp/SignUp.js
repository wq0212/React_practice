import Layout from '../Layout'
import { withRouter } from 'react-router-dom';

function SignUp(){
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
                        <label>
                            <div>비밀번호 확인</div>
                            <input type="password" name="user_pw_check" placeholder="비밀번호를 한번 더 입력해주세요."/>
                        </label>
                        
                    </div>
                    <div>
                        <label>
                            <div>이름</div>
                            <input type="text" name="name" placeholder="이름을 입력해주세요."/>
                        </label>
                        
                    </div>
                    <div>
                        <label>
                            <div>전화번호</div>
                            <input type="text" name="phone" placeholder="전화번호를 입력해주세요."/>
                        </label>
                        
                    </div>
                    <div>
                        <input type="submit" value="회원가입    "/>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
export default withRouter(SignUp);