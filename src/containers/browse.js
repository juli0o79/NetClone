import React, { useContext, useState, useEffect } from 'react';
import Fuse from 'fuse.js'
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Player, Loading, Header, Card, } from '../components';
import { FooterContainer } from './footer'
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';



export function BrowseContainer({ slides }) {

    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState([]);

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(
        () => {
            setTimeout(
                () => {
                    console.log(profile)
                    setLoading(false);
                }, 3000
            );
        }, [profile.displayName]); // fim do effect


    useEffect(
        () => {
            setSlideRows(slides[category]);
        }, [category, slides]);

    useEffect(
        () => {
            const fuse = new Fuse(slideRows, {

                keys: ['data.description', 'data.title', 'data.genre'],
            });

            const results = fuse.search(searchTerm).map(({ item }) => item);
            if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
                setSlideRows(results);
            } else {
                setSlideRows(slides[category])
            };
        }, [searchTerm]);

    return profile.displayName ? (
        <>
            {loading ? (<Loading src={user.photoURL} />)
                : (<Loading.ReleaseBody />)}
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                        <Header.TextLink
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}>Séries</Header.TextLink>
                        <Header.TextLink
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}>Filmes</Header.TextLink>
                    </Header.Group>
                    <Header.GroupSearch>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>
                                        Sair
                                    </Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.GroupSearch>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>
                        Assista Coringa agora
                    </Header.FeatureCallOut>
                    <Header.Text>
                        Isolado, intimidado e desconsiderado pela sociedade, o fracassado
                        comediante Arthur Fleck inicia seu caminho como uma mente
                        criminosa após assassinar três homens em pleno metrô.
                        Sua ação inicia um movimento popular contra a elite
                        de Gotham City, da qual Thomas Wayne é seu maior representante.
                    </Header.Text>
                    <Header.Group>

                        <Player>

                            <Player.ButtonHead>Assistir</Player.ButtonHead>
                            <Player.Video src="/videos/bunny.mp4" />
                        </Player>
                    </Header.Group>
                </Header.Feature>
            </Header>
            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>
                                            {item.title}
                                        </Card.SubTitle>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src="/videos/bunny.mp4" />
                            </Player>
                        </Card.Feature>

                    </Card>)
                )}
            </Card.Group>
            <FooterContainer />
        </>)
        : (<SelectProfileContainer user={user} setProfile={setProfile} />)

}