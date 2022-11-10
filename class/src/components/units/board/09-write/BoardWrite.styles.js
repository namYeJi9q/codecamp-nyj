import styled from '@emotion/styled'

export const RedInput = styled.input`
    border-color: red;
`

export const BlueButton = styled.button`
    background-color: ${(props) => (props.zzz ? "yellow" : "")};
`

// 템플릿 리터럴
// const apple = 3
// "사과는 " + apple + "개 있습니다."
// `사과는 ${apple}개 있습니다.`