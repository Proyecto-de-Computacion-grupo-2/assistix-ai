import Table from 'react-bootstrap/Table';
import {Container, Form} from "react-bootstrap";
import {ChangeEvent, useEffect, useState} from "react";
import {LeagueUser} from "../../../models/league-user.ts";
import {getPlayingUsers, changeUserState} from "../../../services/admin-service/admin-service.ts";

export default function AdminTable() {

    const header_table = ["Id usuario", "Email", "Equipo", "Activo"]
    const [users, setUsers] = useState<LeagueUser[]>([]);

    useEffect(() => {
        getPlayingUsers()
            .then(users => {
                setUsers(users);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    const handleActiveChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newUsers = [...users];
        newUsers[index].active = event.target.checked;
        setUsers(newUsers);

        changeUserState(newUsers[index].id_user, newUsers[index].active)
            .then(updatedUser => {
                console.log('User state updated', updatedUser);
            })
            .catch(error => {
                console.error('Error updating user state', error);
            });
    };

    return (
        <Container className='bg-white rounded-4 mt-4'>
            <Table hover responsive className='text-center'>
                <thead>
                <tr>
                    {header_table.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index} className='text-truncate'>
                        <td>{user.id_user}</td>
                        <td>{user.email}</td>
                        <td>{user.team_name}</td>
                        <td>
                            <Form.Check
                                type="switch"
                                checked={user.active}
                                onChange={event => handleActiveChange(index, event)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}