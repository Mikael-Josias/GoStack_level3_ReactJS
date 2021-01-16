import React from 'react';
import {Title, Form, Repositories} from './style';
import logoImg from '../../assets/logo.svg';
import {FiChevronRight} from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>
            <Form action="">
                <input placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="#teste">
                    <img 
                        src="https://avatars3.githubusercontent.com/u/58566425?s=460&u=57628adb8f67b183681f263ffcb91cee5dbb58e8&v=4"
                        alt="Mikael Josias"
                    />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
                <a href="#teste">
                    <img 
                        src="https://avatars3.githubusercontent.com/u/58566425?s=460&u=57628adb8f67b183681f263ffcb91cee5dbb58e8&v=4"
                        alt="Mikael Josias"
                    />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
                <a href="#teste">
                    <img 
                        src="https://avatars3.githubusercontent.com/u/58566425?s=460&u=57628adb8f67b183681f263ffcb91cee5dbb58e8&v=4"
                        alt="Mikael Josias"
                    />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;