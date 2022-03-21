import React from 'react';
import { useParams } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
    ycLee : {
        name : '연철리',
        description : '프론트앤드 개발자 새내기'
    }, 
    gildong : {
        name : '홍길동',
        description : '고전소설 홍길동전 주인공'
    }, 
};

const Profile = () => {
    // matchid 가져오기
    const { username } = useParams();
    // const { username } = match.parms;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자 입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
    )
}

export default Profile;