import { IsString, MaxLength, MinLength, IsNumber } from 'class-validator';

export class ProductDto {

    @IsString({ message: 'O valor de code nao eh uma string valida!' })
    @MaxLength(10, { message: 'O valor de code deve possuir no maximo 10 caracteres.' })
    code: string;

    @IsString({ message: 'O valor de name nao eh uma string valida!' })
    @MinLength(5, { message: 'O valor de name deve possuir mais que 5 caracteres.' })
    @MaxLength(60, { message: 'O valor de name deve possuir no maximo 60 caracteres.' })
    name: string;

    @IsNumber()
    price: number;

}