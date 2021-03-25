import Layout from '../Layout'
import { Link } from 'react-router-dom';

function MainPage(){
    const onLoginBtnClick=function(){
        this.props.history.push('/');
    }
    return  (
        <Layout>
            <div class="wrap">
                <form>
                    <div>
                        <Link to="/Login">로그인</Link>
                    </div>
                </form>
                <form>
                    <div>
                        <Link to="/SignUp">가입하기</Link>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
export default MainPage;