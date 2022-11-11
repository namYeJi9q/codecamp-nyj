import { ChangeEvent } from "react"

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any
}

export interface IMyvariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}

export interface IBoardWriteUIProps {
    onClickSubmit: () => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    isActive: boolean
    isEdit: boolean
    onClickEdit: () => void
    data: any
}

export interface IBlueButtonProps {
    qqq: string
    zzz: boolean
}