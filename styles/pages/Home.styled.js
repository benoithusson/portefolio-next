import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${(props) => props.padding || "100px 150px 100px 150px"};
  min-height: 100vh;
  background-color: salmon;
  @media (max-width: 768px) {
    padding: 0 40px 0 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  background-color: skyblue;
  min-height: 40vh;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    min-height: 100vh;
  }
`;

export const Bloc = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-grow: ${(props) => props.flexGrow || "1"};
  margin: ${(props) => props.margin || "0 20px 0 0"};
  background-color: ${(props) => props.bgColor || "white"};

  li {
    list-style-type: none;
    line-height: 60px;
    a {
      text-decoration: none;
    }
  }

  h2 {
    display: inline-block;
  }

  @media (max-width: 768px) {
    margin: 0 0 50px 0;
    width: 100%;
    align-items: center;

    p {
      text-align: center;
    }
  }
`;
