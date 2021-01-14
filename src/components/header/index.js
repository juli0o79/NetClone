import React, { useState } from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {Background,
        ButtonLink,
        Container,
        Dropdown,
        Profile,
        Group,
        GroupSearch,
        Picture,
        Logo,
        Feature,
        Text,
        FeatureCallOut,
        TextLink,
        Search,
        SearchIcon,
        SearchInput,
        PlayButton,
        }
        from './styles/header';


export default function Header({ bg = true, children, ...restProps}) {
    return bg ? <Background {...restProps}> {children} </Background> : children; // children aqui não está entre jsx, pode ser usado como objeto (verificar)

}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return(
        <Feature {...restProps}>{children}</Feature>
    )
}

Header.Picture = function HeaderPicture({src, ...restProps}){
    return(
        <Picture {...restProps} src={`/images/users/${src}.png`} />
    )
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
    return(
        <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
    )
}

Header.Profile = function HeaderProfile({children, ...restProps}){
    return(
        <Profile {...restProps}>{children}</Profile>
    )
}

Header.Text = function HeaderText({children, ...restProps}){
    return(
        <Text {...restProps}>{children}</Text>
    )
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false);
    return(
        <Search {...restProps}>
            <SearchIcon onClick={()=> setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt="search" />
            </SearchIcon>
            <SearchInput value = {searchTerm} onChange = {({target}) => setSearchTerm(target.value)}
            placeholder = "Pesquise por filmes e séries" active={searchActive} />
        </Search>
    )
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}){
    return(
        <Dropdown {...restProps}>{children}</Dropdown>
    )
}

Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return(
        <TextLink {...restProps}>{children}</TextLink>
    )
}


Header.PlayButton = function HeaderPlayButton({children, ...restProps}){
    return(
        <PlayButton {...restProps}>{children}</PlayButton>
    )
}

Header.Frame = function HeaderFrame({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
};

Header.Group = function HeaderGroup({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
};

Header.GroupSearch = function HeaderGroupSearch({children, ...restProps}){
    return <GroupSearch {...restProps}>{children}</GroupSearch>
};

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
};

Header.Logo = function HeaderLogo({to, ...restProps}){
    return(
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}