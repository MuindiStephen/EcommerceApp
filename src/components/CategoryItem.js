import styled from "styled-components"

const Container = styled.div `
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative; 
`;

const Image = styled.img `
  width: 100%
`;

const Info = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title = styled.div `
 color: white;
 margin-botton: 20px;
`;
const Button = styled.div `
    border : none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem