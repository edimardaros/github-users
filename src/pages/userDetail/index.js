import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/input";

import { Container, Label, Table } from '../../pages/userDetail/styles';
import UserService from "../../services/UserService";

export default function UserDetail() {
    const { username } = useParams();
    const [id, setId] = useState('');
    const [login, setLogin] = useState('');
    const [profileURL, setProfileURL] = useState('');
    const [dateCreation, setDateCreation] = useState('');
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        async function loadUser() {
            try {
                const userData = await UserService.getUserbyId( username );
                console.log(userData);
                setId(userData.id);
                setLogin(userData.login);
                setProfileURL(userData.html_url);
                setDateCreation(userData.created_at);
            } catch {

            }
        }
        loadUser();

        async function loadRepositories() {
            try {
                const repositoriesData = await UserService.getRepositories( username );
                console.log(repositoriesData);
                setRepositories(repositoriesData);
            } catch {

            }
        }

        loadRepositories() ;
    }, [])
    return (
        <>
            <Container>
                <Label>Id</Label>
                <Input disabled="true" value={id}/>
            </Container>

            <Container>
                <Label>Login</Label>
                <Input disabled="true" value={login}/>
            </Container>

            <Container>
                <Label>Profile URL</Label>
                <Input disabled="true" value={profileURL}/>
            </Container>

            <Container>
                <Label>Date creation</Label>
                <Input disabled="true" value={dateCreation}/>
            </Container>
            {repositories && repositories.length && <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {repositories.map((obj, index) => (
                        <tr key={index}>
                            <td>{obj.id}</td>
                            <td>{obj.name}</td>
                            <td>{obj.url}</td>
                        </tr>

                    ))}
                </tbody>
            </Table>}



        </>
    )
};
