import styled from 'styled-components';

export const HomePage = styled.View`
  background-color: slateblue;
  flex: 1;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  height: 15%;
  /* background-color: rebeccapurple; */
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  background-color: orchid;
  border-radius: 10px;
  padding: 5px 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: white;
`;
