import React from 'react';
import styled from 'styled-components';

export default class Home extends React.Component{
    render() {
        return (
            <OuterContainer>
                <InnerContainer>
                    <NavigationLinksContainer>
                        <NavigationLink href={APP_URL + "/student-registration"}>
                            Student Registration
                        </NavigationLink>
                        <NavigationLink href={APP_URL + "/"}>Fee Payment</NavigationLink>
                    </NavigationLinksContainer>
                </InnerContainer>
            </OuterContainer>
        );
    }
}

const OuterContainer = styled.div`
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

const InnerContainer = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

const NavigationLinksContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    display: flex;
    justify-content: space-around;
`;

const NavigationLink = styled.a`
    font-size: 27px;
    text-decoration: none !important;
`;

