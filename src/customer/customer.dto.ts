import { IsInt, IsString, MaxLength, MinLength} from 'class-validator';

export class CustomerDto {

    @IsInt({ message: 'O valor do campo ID, não é um inteiro válido!' })
    id: number;

    @IsString({ message: 'O valor do campo name, não é uma string válida!' })
    @MinLength(5, { message: 'O campo name deve ter no mínimo 5 caracteres.' })
    @MaxLength(80, { message: 'O campo name deve ter no máximo 60 caracteres.' })
    name: string;

    @IsString({ message: 'O valor do campo CPF, não é uma string válida!' })
    cpf: string;
    
    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(5, { message: 'O campo deve ter no mínimo 5 caracteres.' })
    @MaxLength(120, { message: 'O campo deve ter no máximo 120 caracteres.' })
    address: string;
}