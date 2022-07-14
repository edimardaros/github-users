import { useEffect, useState } from 'react';
import { Container, Header, InputSearchContainer, Table, Link, PaginationItem, Pagination } from '../../pages/home/styles';
import UserService from '../../services/UserService';

export default function Home() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function loadUsers(){

        const userList = await UserService.getUsers(page);

        setUsers(userList);


    }
    loadUsers();

    function search(){
        const input = document.getElementById('search-input');
        input.addEventListener("keypress", async(e) => {
            if(e.key === 'Enter'){
                if(input.value){
                    const user = await UserService.getUserbyId(input.value);
                    setUsers([user]);
                    console.log([user].length)

                }


            }
        })
    }
    search();

    }, [page]);
    return (
        <Container>

            <InputSearchContainer>
                <input type="text" id="search-input" placeholder="Search for a user..."/>
            </InputSearchContainer>
            <Header>
                <strong>
                    {users.length}
                    {users.lenght === 1 ? ' user' : ' users'}
                </strong>
            </Header>

            {users && users.length && <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Login</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((obj, index) => (
                        <tr key={index}>

                            <td><Link href={`/userDetail/${obj.login}`}>{obj.id}</Link></td>
                            <td><Link href={`/userDetail/${obj.login}`}>{obj.login}</Link></td>
                        </tr>

                    ))}
                </tbody>
            </Table>}
            <Pagination>
                <PaginationItem onClick={() => setPage(page - 1)}><span>Previous</span></PaginationItem>
                <PaginationItem onClick={() => setPage(page + 1)}><span>Next</span></PaginationItem>
            </Pagination>



        </Container>
    )
};
