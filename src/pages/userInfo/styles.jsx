import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
text-align: center;
    margin-top: 20px;
    border: 1px solid  #808080;
    border-radius: 5px;
    padding: 20px 0;
    width: 350px;
    color: #FFFFFF;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
   

    img {
        border-radius: 50%;
        width: 120px;
    }

    p {
    }
`

export const ContainerFollowers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const MessageError = styled.span `
    background-color: #FFFFFF;
    color: #f50404;
    padding: 20px;
    width: 500px;
    text-align: center;
    border-radius: 5px;
    margin-top: 20px;
`