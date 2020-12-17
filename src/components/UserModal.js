import React, {useState} from 'react';
import {Button, ListGroup, Modal} from 'react-bootstrap';
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';

function UserModal(props) {
    const {user} = props;
    const [modalVisible, setModalVisible] = useState(false);

    const isShow = () => setModalVisible(prevState => !prevState);

    return (
        <React.Fragment>
            <Button variant="light" onClick={isShow}>More</Button>

            <Rodal visible={modalVisible} onClose={isShow}>
                <div className='modal-content'>
                    <Modal.Header>
                        <Modal.Title>{user.name}</Modal.Title>
                        <div className='modal__small-title'>{user.login}</div>
                    </Modal.Header>
                    <Modal.Body>
                        <ul className='statistics'>
                            <li className='statistics__item'>
                                <span className='strong'>{user.followers}</span> followers
                            </li>
                            <li className='statistics__item'>*</li>
                            <li className='statistics__item'>
                                <span className='strong'>{user.following}</span> following
                            </li>
                        </ul>
                        <ListGroup variant="flush">
                            {user.bio !== null ? <ListGroup.Item>{user.bio}</ListGroup.Item> : null}
                            {user.blog !== '' ?
                                <ListGroup.Item><a href={user.blog}>{user.blog}</a></ListGroup.Item> : null}
                            {user.location !== null ? <ListGroup.Item>{user.location}</ListGroup.Item> : null}
                            {user.email !== '' ? <ListGroup.Item>{user.email}</ListGroup.Item> : null}
                            {user.twitter_username !== null ?
                                <ListGroup.Item>{user.twitter_username}</ListGroup.Item> : null}
                        </ListGroup>
                    </Modal.Body>
                </div>
            </Rodal>
        </React.Fragment>
    )
}

export default UserModal
