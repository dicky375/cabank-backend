import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CardModel = runtime.Types.Result.DefaultSelection<Prisma.$CardPayload>;
export type AggregateCard = {
    _count: CardCountAggregateOutputType | null;
    _min: CardMinAggregateOutputType | null;
    _max: CardMaxAggregateOutputType | null;
};
export type CardMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    accountId: string | null;
    cardNumber: string | null;
    expiryDate: Date | null;
    cvvHash: string | null;
    brand: string | null;
    status: string | null;
    createdAt: Date | null;
};
export type CardMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    accountId: string | null;
    cardNumber: string | null;
    expiryDate: Date | null;
    cvvHash: string | null;
    brand: string | null;
    status: string | null;
    createdAt: Date | null;
};
export type CardCountAggregateOutputType = {
    id: number;
    userId: number;
    accountId: number;
    cardNumber: number;
    expiryDate: number;
    cvvHash: number;
    brand: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type CardMinAggregateInputType = {
    id?: true;
    userId?: true;
    accountId?: true;
    cardNumber?: true;
    expiryDate?: true;
    cvvHash?: true;
    brand?: true;
    status?: true;
    createdAt?: true;
};
export type CardMaxAggregateInputType = {
    id?: true;
    userId?: true;
    accountId?: true;
    cardNumber?: true;
    expiryDate?: true;
    cvvHash?: true;
    brand?: true;
    status?: true;
    createdAt?: true;
};
export type CardCountAggregateInputType = {
    id?: true;
    userId?: true;
    accountId?: true;
    cardNumber?: true;
    expiryDate?: true;
    cvvHash?: true;
    brand?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type CardAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CardWhereInput;
    orderBy?: Prisma.CardOrderByWithRelationInput | Prisma.CardOrderByWithRelationInput[];
    cursor?: Prisma.CardWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CardCountAggregateInputType;
    _min?: CardMinAggregateInputType;
    _max?: CardMaxAggregateInputType;
};
export type GetCardAggregateType<T extends CardAggregateArgs> = {
    [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCard[P]> : Prisma.GetScalarType<T[P], AggregateCard[P]>;
};
export type CardGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CardWhereInput;
    orderBy?: Prisma.CardOrderByWithAggregationInput | Prisma.CardOrderByWithAggregationInput[];
    by: Prisma.CardScalarFieldEnum[] | Prisma.CardScalarFieldEnum;
    having?: Prisma.CardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CardCountAggregateInputType | true;
    _min?: CardMinAggregateInputType;
    _max?: CardMaxAggregateInputType;
};
export type CardGroupByOutputType = {
    id: string;
    userId: string;
    accountId: string;
    cardNumber: string;
    expiryDate: Date;
    cvvHash: string;
    brand: string;
    status: string;
    createdAt: Date;
    _count: CardCountAggregateOutputType | null;
    _min: CardMinAggregateOutputType | null;
    _max: CardMaxAggregateOutputType | null;
};
export type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CardGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CardGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CardGroupByOutputType[P]>;
}>>;
export type CardWhereInput = {
    AND?: Prisma.CardWhereInput | Prisma.CardWhereInput[];
    OR?: Prisma.CardWhereInput[];
    NOT?: Prisma.CardWhereInput | Prisma.CardWhereInput[];
    id?: Prisma.StringFilter<"Card"> | string;
    userId?: Prisma.StringFilter<"Card"> | string;
    accountId?: Prisma.StringFilter<"Card"> | string;
    cardNumber?: Prisma.StringFilter<"Card"> | string;
    expiryDate?: Prisma.DateTimeFilter<"Card"> | Date | string;
    cvvHash?: Prisma.StringFilter<"Card"> | string;
    brand?: Prisma.StringFilter<"Card"> | string;
    status?: Prisma.StringFilter<"Card"> | string;
    createdAt?: Prisma.DateTimeFilter<"Card"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    account?: Prisma.XOR<Prisma.AccountScalarRelationFilter, Prisma.AccountWhereInput>;
};
export type CardOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    cvvHash?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    account?: Prisma.AccountOrderByWithRelationInput;
};
export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    cardNumber?: string;
    AND?: Prisma.CardWhereInput | Prisma.CardWhereInput[];
    OR?: Prisma.CardWhereInput[];
    NOT?: Prisma.CardWhereInput | Prisma.CardWhereInput[];
    userId?: Prisma.StringFilter<"Card"> | string;
    accountId?: Prisma.StringFilter<"Card"> | string;
    expiryDate?: Prisma.DateTimeFilter<"Card"> | Date | string;
    cvvHash?: Prisma.StringFilter<"Card"> | string;
    brand?: Prisma.StringFilter<"Card"> | string;
    status?: Prisma.StringFilter<"Card"> | string;
    createdAt?: Prisma.DateTimeFilter<"Card"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    account?: Prisma.XOR<Prisma.AccountScalarRelationFilter, Prisma.AccountWhereInput>;
}, "id" | "cardNumber">;
export type CardOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    cvvHash?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CardCountOrderByAggregateInput;
    _max?: Prisma.CardMaxOrderByAggregateInput;
    _min?: Prisma.CardMinOrderByAggregateInput;
};
export type CardScalarWhereWithAggregatesInput = {
    AND?: Prisma.CardScalarWhereWithAggregatesInput | Prisma.CardScalarWhereWithAggregatesInput[];
    OR?: Prisma.CardScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CardScalarWhereWithAggregatesInput | Prisma.CardScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Card"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Card"> | string;
    accountId?: Prisma.StringWithAggregatesFilter<"Card"> | string;
    cardNumber?: Prisma.StringWithAggregatesFilter<"Card"> | string;
    expiryDate?: Prisma.DateTimeWithAggregatesFilter<"Card"> | Date | string;
    cvvHash?: Prisma.StringWithAggregatesFilter<"Card"> | string;
    brand?: Prisma.StringWithAggregatesFilter<"Card"> | string;
    status?: Prisma.StringWithAggregatesFilter<"Card"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Card"> | Date | string;
};
export type CardCreateInput = {
    id?: string;
    cardNumber: string;
    expiryDate: Date | string;
    cvvHash: string;
    brand?: string;
    status?: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCardsInput;
    account: Prisma.AccountCreateNestedOneWithoutCardsInput;
};
export type CardUncheckedCreateInput = {
    id?: string;
    userId: string;
    accountId: string;
    cardNumber: string;
    expiryDate: Date | string;
    cvvHash: string;
    brand?: string;
    status?: string;
    createdAt?: Date | string;
};
export type CardUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cvvHash?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCardsNestedInput;
    account?: Prisma.AccountUpdateOneRequiredWithoutCardsNestedInput;
};
export type CardUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    accountId?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cvvHash?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CardCreateManyInput = {
    id?: string;
    userId: string;
    accountId: string;
    cardNumber: string;
    expiryDate: Date | string;
    cvvHash: string;
    brand?: string;
    status?: string;
    createdAt?: Date | string;
};
export type CardUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cvvHash?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CardUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    accountId?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cvvHash?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CardListRelationFilter = {
    every?: Prisma.CardWhereInput;
    some?: Prisma.CardWhereInput;
    none?: Prisma.CardWhereInput;
};
export type CardOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CardCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    cvvHash?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CardMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    cvvHash?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CardMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    accountId?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    expiryDate?: Prisma.SortOrder;
    cvvHash?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CardCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CardCreateWithoutUserInput, Prisma.CardUncheckedCreateWithoutUserInput> | Prisma.CardCreateWithoutUserInput[] | Prisma.CardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CardCreateOrConnectWithoutUserInput | Prisma.CardCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CardCreateManyUserInputEnvelope;
    connect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
};
export type CardUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CardCreateWithoutUserInput, Prisma.CardUncheckedCreateWithoutUserInput> | Prisma.CardCreateWithoutUserInput[] | Prisma.CardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CardCreateOrConnectWithoutUserInput | Prisma.CardCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CardCreateManyUserInputEnvelope;
    connect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
};
export type CardUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CardCreateWithoutUserInput, Prisma.CardUncheckedCreateWithoutUserInput> | Prisma.CardCreateWithoutUserInput[] | Prisma.CardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CardCreateOrConnectWithoutUserInput | Prisma.CardCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CardUpsertWithWhereUniqueWithoutUserInput | Prisma.CardUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CardCreateManyUserInputEnvelope;
    set?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    disconnect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    delete?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    connect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    update?: Prisma.CardUpdateWithWhereUniqueWithoutUserInput | Prisma.CardUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CardUpdateManyWithWhereWithoutUserInput | Prisma.CardUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CardScalarWhereInput | Prisma.CardScalarWhereInput[];
};
export type CardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CardCreateWithoutUserInput, Prisma.CardUncheckedCreateWithoutUserInput> | Prisma.CardCreateWithoutUserInput[] | Prisma.CardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CardCreateOrConnectWithoutUserInput | Prisma.CardCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CardUpsertWithWhereUniqueWithoutUserInput | Prisma.CardUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CardCreateManyUserInputEnvelope;
    set?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    disconnect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    delete?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    connect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    update?: Prisma.CardUpdateWithWhereUniqueWithoutUserInput | Prisma.CardUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CardUpdateManyWithWhereWithoutUserInput | Prisma.CardUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CardScalarWhereInput | Prisma.CardScalarWhereInput[];
};
export type CardCreateNestedManyWithoutAccountInput = {
    create?: Prisma.XOR<Prisma.CardCreateWithoutAccountInput, Prisma.CardUncheckedCreateWithoutAccountInput> | Prisma.CardCreateWithoutAccountInput[] | Prisma.CardUncheckedCreateWithoutAccountInput[];
    connectOrCreate?: Prisma.CardCreateOrConnectWithoutAccountInput | Prisma.CardCreateOrConnectWithoutAccountInput[];
    createMany?: Prisma.CardCreateManyAccountInputEnvelope;
    connect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
};
export type CardUncheckedCreateNestedManyWithoutAccountInput = {
    create?: Prisma.XOR<Prisma.CardCreateWithoutAccountInput, Prisma.CardUncheckedCreateWithoutAccountInput> | Prisma.CardCreateWithoutAccountInput[] | Prisma.CardUncheckedCreateWithoutAccountInput[];
    connectOrCreate?: Prisma.CardCreateOrConnectWithoutAccountInput | Prisma.CardCreateOrConnectWithoutAccountInput[];
    createMany?: Prisma.CardCreateManyAccountInputEnvelope;
    connect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
};
export type CardUpdateManyWithoutAccountNestedInput = {
    create?: Prisma.XOR<Prisma.CardCreateWithoutAccountInput, Prisma.CardUncheckedCreateWithoutAccountInput> | Prisma.CardCreateWithoutAccountInput[] | Prisma.CardUncheckedCreateWithoutAccountInput[];
    connectOrCreate?: Prisma.CardCreateOrConnectWithoutAccountInput | Prisma.CardCreateOrConnectWithoutAccountInput[];
    upsert?: Prisma.CardUpsertWithWhereUniqueWithoutAccountInput | Prisma.CardUpsertWithWhereUniqueWithoutAccountInput[];
    createMany?: Prisma.CardCreateManyAccountInputEnvelope;
    set?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    disconnect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    delete?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    connect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    update?: Prisma.CardUpdateWithWhereUniqueWithoutAccountInput | Prisma.CardUpdateWithWhereUniqueWithoutAccountInput[];
    updateMany?: Prisma.CardUpdateManyWithWhereWithoutAccountInput | Prisma.CardUpdateManyWithWhereWithoutAccountInput[];
    deleteMany?: Prisma.CardScalarWhereInput | Prisma.CardScalarWhereInput[];
};
export type CardUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: Prisma.XOR<Prisma.CardCreateWithoutAccountInput, Prisma.CardUncheckedCreateWithoutAccountInput> | Prisma.CardCreateWithoutAccountInput[] | Prisma.CardUncheckedCreateWithoutAccountInput[];
    connectOrCreate?: Prisma.CardCreateOrConnectWithoutAccountInput | Prisma.CardCreateOrConnectWithoutAccountInput[];
    upsert?: Prisma.CardUpsertWithWhereUniqueWithoutAccountInput | Prisma.CardUpsertWithWhereUniqueWithoutAccountInput[];
    createMany?: Prisma.CardCreateManyAccountInputEnvelope;
    set?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    disconnect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    delete?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    connect?: Prisma.CardWhereUniqueInput | Prisma.CardWhereUniqueInput[];
    update?: Prisma.CardUpdateWithWhereUniqueWithoutAccountInput | Prisma.CardUpdateWithWhereUniqueWithoutAccountInput[];
    updateMany?: Prisma.CardUpdateManyWithWhereWithoutAccountInput | Prisma.CardUpdateManyWithWhereWithoutAccountInput[];
    deleteMany?: Prisma.CardScalarWhereInput | Prisma.CardScalarWhereInput[];
};
export type CardCreateWithoutUserInput = {
    id?: string;
    cardNumber: string;
    expiryDate: Date | string;
    cvvHash: string;
    brand?: string;
    status?: string;
    createdAt?: Date | string;
    account: Prisma.AccountCreateNestedOneWithoutCardsInput;
};
export type CardUncheckedCreateWithoutUserInput = {
    id?: string;
    accountId: string;
    cardNumber: string;
    expiryDate: Date | string;
    cvvHash: string;
    brand?: string;
    status?: string;
    createdAt?: Date | string;
};
export type CardCreateOrConnectWithoutUserInput = {
    where: Prisma.CardWhereUniqueInput;
    create: Prisma.XOR<Prisma.CardCreateWithoutUserInput, Prisma.CardUncheckedCreateWithoutUserInput>;
};
export type CardCreateManyUserInputEnvelope = {
    data: Prisma.CardCreateManyUserInput | Prisma.CardCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CardUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CardWhereUniqueInput;
    update: Prisma.XOR<Prisma.CardUpdateWithoutUserInput, Prisma.CardUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CardCreateWithoutUserInput, Prisma.CardUncheckedCreateWithoutUserInput>;
};
export type CardUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CardWhereUniqueInput;
    data: Prisma.XOR<Prisma.CardUpdateWithoutUserInput, Prisma.CardUncheckedUpdateWithoutUserInput>;
};
export type CardUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CardScalarWhereInput;
    data: Prisma.XOR<Prisma.CardUpdateManyMutationInput, Prisma.CardUncheckedUpdateManyWithoutUserInput>;
};
export type CardScalarWhereInput = {
    AND?: Prisma.CardScalarWhereInput | Prisma.CardScalarWhereInput[];
    OR?: Prisma.CardScalarWhereInput[];
    NOT?: Prisma.CardScalarWhereInput | Prisma.CardScalarWhereInput[];
    id?: Prisma.StringFilter<"Card"> | string;
    userId?: Prisma.StringFilter<"Card"> | string;
    accountId?: Prisma.StringFilter<"Card"> | string;
    cardNumber?: Prisma.StringFilter<"Card"> | string;
    expiryDate?: Prisma.DateTimeFilter<"Card"> | Date | string;
    cvvHash?: Prisma.StringFilter<"Card"> | string;
    brand?: Prisma.StringFilter<"Card"> | string;
    status?: Prisma.StringFilter<"Card"> | string;
    createdAt?: Prisma.DateTimeFilter<"Card"> | Date | string;
};
export type CardCreateWithoutAccountInput = {
    id?: string;
    cardNumber: string;
    expiryDate: Date | string;
    cvvHash: string;
    brand?: string;
    status?: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCardsInput;
};
export type CardUncheckedCreateWithoutAccountInput = {
    id?: string;
    userId: string;
    cardNumber: string;
    expiryDate: Date | string;
    cvvHash: string;
    brand?: string;
    status?: string;
    createdAt?: Date | string;
};
export type CardCreateOrConnectWithoutAccountInput = {
    where: Prisma.CardWhereUniqueInput;
    create: Prisma.XOR<Prisma.CardCreateWithoutAccountInput, Prisma.CardUncheckedCreateWithoutAccountInput>;
};
export type CardCreateManyAccountInputEnvelope = {
    data: Prisma.CardCreateManyAccountInput | Prisma.CardCreateManyAccountInput[];
    skipDuplicates?: boolean;
};
export type CardUpsertWithWhereUniqueWithoutAccountInput = {
    where: Prisma.CardWhereUniqueInput;
    update: Prisma.XOR<Prisma.CardUpdateWithoutAccountInput, Prisma.CardUncheckedUpdateWithoutAccountInput>;
    create: Prisma.XOR<Prisma.CardCreateWithoutAccountInput, Prisma.CardUncheckedCreateWithoutAccountInput>;
};
export type CardUpdateWithWhereUniqueWithoutAccountInput = {
    where: Prisma.CardWhereUniqueInput;
    data: Prisma.XOR<Prisma.CardUpdateWithoutAccountInput, Prisma.CardUncheckedUpdateWithoutAccountInput>;
};
export type CardUpdateManyWithWhereWithoutAccountInput = {
    where: Prisma.CardScalarWhereInput;
    data: Prisma.XOR<Prisma.CardUpdateManyMutationInput, Prisma.CardUncheckedUpdateManyWithoutAccountInput>;
};
export type CardCreateManyUserInput = {
    id?: string;
    accountId: string;
    cardNumber: string;
    expiryDate: Date | string;
    cvvHash: string;
    brand?: string;
    status?: string;
    createdAt?: Date | string;
};
export type CardUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cvvHash?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    account?: Prisma.AccountUpdateOneRequiredWithoutCardsNestedInput;
};
export type CardUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountId?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cvvHash?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CardUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountId?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cvvHash?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CardCreateManyAccountInput = {
    id?: string;
    userId: string;
    cardNumber: string;
    expiryDate: Date | string;
    cvvHash: string;
    brand?: string;
    status?: string;
    createdAt?: Date | string;
};
export type CardUpdateWithoutAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cvvHash?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCardsNestedInput;
};
export type CardUncheckedUpdateWithoutAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cvvHash?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CardUncheckedUpdateManyWithoutAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    expiryDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cvvHash?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CardSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    accountId?: boolean;
    cardNumber?: boolean;
    expiryDate?: boolean;
    cvvHash?: boolean;
    brand?: boolean;
    status?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["card"]>;
export type CardSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    accountId?: boolean;
    cardNumber?: boolean;
    expiryDate?: boolean;
    cvvHash?: boolean;
    brand?: boolean;
    status?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["card"]>;
export type CardSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    accountId?: boolean;
    cardNumber?: boolean;
    expiryDate?: boolean;
    cvvHash?: boolean;
    brand?: boolean;
    status?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["card"]>;
export type CardSelectScalar = {
    id?: boolean;
    userId?: boolean;
    accountId?: boolean;
    cardNumber?: boolean;
    expiryDate?: boolean;
    cvvHash?: boolean;
    brand?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type CardOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "accountId" | "cardNumber" | "expiryDate" | "cvvHash" | "brand" | "status" | "createdAt", ExtArgs["result"]["card"]>;
export type CardInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
};
export type CardIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
};
export type CardIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    account?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
};
export type $CardPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Card";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        account: Prisma.$AccountPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        accountId: string;
        cardNumber: string;
        expiryDate: Date;
        cvvHash: string;
        brand: string;
        status: string;
        createdAt: Date;
    }, ExtArgs["result"]["card"]>;
    composites: {};
};
export type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CardPayload, S>;
export type CardCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CardCountAggregateInputType | true;
};
export interface CardDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Card'];
        meta: {
            name: 'Card';
        };
    };
    findUnique<T extends CardFindUniqueArgs>(args: Prisma.SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CardFindFirstArgs>(args?: Prisma.SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CardFindManyArgs>(args?: Prisma.SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CardCreateArgs>(args: Prisma.SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CardCreateManyArgs>(args?: Prisma.SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CardDeleteArgs>(args: Prisma.SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CardUpdateArgs>(args: Prisma.SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CardDeleteManyArgs>(args?: Prisma.SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CardUpdateManyArgs>(args: Prisma.SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CardUpsertArgs>(args: Prisma.SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma.Prisma__CardClient<runtime.Types.Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CardCountArgs>(args?: Prisma.Subset<T, CardCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CardCountAggregateOutputType> : number>;
    aggregate<T extends CardAggregateArgs>(args: Prisma.Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>;
    groupBy<T extends CardGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CardGroupByArgs['orderBy'];
    } : {
        orderBy?: CardGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CardFieldRefs;
}
export interface Prisma__CardClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    account<T extends Prisma.AccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccountDefaultArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CardFieldRefs {
    readonly id: Prisma.FieldRef<"Card", 'String'>;
    readonly userId: Prisma.FieldRef<"Card", 'String'>;
    readonly accountId: Prisma.FieldRef<"Card", 'String'>;
    readonly cardNumber: Prisma.FieldRef<"Card", 'String'>;
    readonly expiryDate: Prisma.FieldRef<"Card", 'DateTime'>;
    readonly cvvHash: Prisma.FieldRef<"Card", 'String'>;
    readonly brand: Prisma.FieldRef<"Card", 'String'>;
    readonly status: Prisma.FieldRef<"Card", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Card", 'DateTime'>;
}
export type CardFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CardSelect<ExtArgs> | null;
    omit?: Prisma.CardOmit<ExtArgs> | null;
    include?: Prisma.CardInclude<ExtArgs> | null;
    where: Prisma.CardWhereUniqueInput;
};
export type CardFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CardSelect<ExtArgs> | null;
    omit?: Prisma.CardOmit<ExtArgs> | null;
    include?: Prisma.CardInclude<ExtArgs> | null;
    where: Prisma.CardWhereUniqueInput;
};
export type CardFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CardSelect<ExtArgs> | null;
    omit?: Prisma.CardOmit<ExtArgs> | null;
    include?: Prisma.CardInclude<ExtArgs> | null;
    where?: Prisma.CardWhereInput;
    orderBy?: Prisma.CardOrderByWithRelationInput | Prisma.CardOrderByWithRelationInput[];
    cursor?: Prisma.CardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CardScalarFieldEnum | Prisma.CardScalarFieldEnum[];
};
export type CardFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CardSelect<ExtArgs> | null;
    omit?: Prisma.CardOmit<ExtArgs> | null;
    include?: Prisma.CardInclude<ExtArgs> | null;
    where?: Prisma.CardWhereInput;
    orderBy?: Prisma.CardOrderByWithRelationInput | Prisma.CardOrderByWithRelationInput[];
    cursor?: Prisma.CardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CardScalarFieldEnum | Prisma.CardScalarFieldEnum[];
};
export type CardFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CardSelect<ExtArgs> | null;
    omit?: Prisma.CardOmit<ExtArgs> | null;
    include?: Prisma.CardInclude<ExtArgs> | null;
    where?: Prisma.CardWhereInput;
    orderBy?: Prisma.CardOrderByWithRelationInput | Prisma.CardOrderByWithRelationInput[];
    cursor?: Prisma.CardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CardScalarFieldEnum | Prisma.CardScalarFieldEnum[];
};
export type CardCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CardSelect<ExtArgs> | null;
    omit?: Prisma.CardOmit<ExtArgs> | null;
    include?: Prisma.CardInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CardCreateInput, Prisma.CardUncheckedCreateInput>;
};
export type CardCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CardCreateManyInput | Prisma.CardCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CardCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CardSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CardOmit<ExtArgs> | null;
    data: Prisma.CardCreateManyInput | Prisma.CardCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CardIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CardUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CardSelect<ExtArgs> | null;
    omit?: Prisma.CardOmit<ExtArgs> | null;
    include?: Prisma.CardInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CardUpdateInput, Prisma.CardUncheckedUpdateInput>;
    where: Prisma.CardWhereUniqueInput;
};
export type CardUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CardUpdateManyMutationInput, Prisma.CardUncheckedUpdateManyInput>;
    where?: Prisma.CardWhereInput;
    limit?: number;
};
export type CardUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CardSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CardOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CardUpdateManyMutationInput, Prisma.CardUncheckedUpdateManyInput>;
    where?: Prisma.CardWhereInput;
    limit?: number;
    include?: Prisma.CardIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CardUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CardSelect<ExtArgs> | null;
    omit?: Prisma.CardOmit<ExtArgs> | null;
    include?: Prisma.CardInclude<ExtArgs> | null;
    where: Prisma.CardWhereUniqueInput;
    create: Prisma.XOR<Prisma.CardCreateInput, Prisma.CardUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CardUpdateInput, Prisma.CardUncheckedUpdateInput>;
};
export type CardDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CardSelect<ExtArgs> | null;
    omit?: Prisma.CardOmit<ExtArgs> | null;
    include?: Prisma.CardInclude<ExtArgs> | null;
    where: Prisma.CardWhereUniqueInput;
};
export type CardDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CardWhereInput;
    limit?: number;
};
export type CardDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CardSelect<ExtArgs> | null;
    omit?: Prisma.CardOmit<ExtArgs> | null;
    include?: Prisma.CardInclude<ExtArgs> | null;
};
