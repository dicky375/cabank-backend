import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type TransactionModel = runtime.Types.Result.DefaultSelection<Prisma.$TransactionPayload>;
export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
};
export type TransactionAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
    fee: runtime.Decimal | null;
};
export type TransactionSumAggregateOutputType = {
    amount: runtime.Decimal | null;
    fee: runtime.Decimal | null;
};
export type TransactionMinAggregateOutputType = {
    id: string | null;
    reference: string | null;
    senderId: string | null;
    receiverId: string | null;
    amount: runtime.Decimal | null;
    fee: runtime.Decimal | null;
    type: $Enums.TransactionType | null;
    status: $Enums.TransactionStatus | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TransactionMaxAggregateOutputType = {
    id: string | null;
    reference: string | null;
    senderId: string | null;
    receiverId: string | null;
    amount: runtime.Decimal | null;
    fee: runtime.Decimal | null;
    type: $Enums.TransactionType | null;
    status: $Enums.TransactionStatus | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TransactionCountAggregateOutputType = {
    id: number;
    reference: number;
    senderId: number;
    receiverId: number;
    amount: number;
    fee: number;
    type: number;
    status: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TransactionAvgAggregateInputType = {
    amount?: true;
    fee?: true;
};
export type TransactionSumAggregateInputType = {
    amount?: true;
    fee?: true;
};
export type TransactionMinAggregateInputType = {
    id?: true;
    reference?: true;
    senderId?: true;
    receiverId?: true;
    amount?: true;
    fee?: true;
    type?: true;
    status?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TransactionMaxAggregateInputType = {
    id?: true;
    reference?: true;
    senderId?: true;
    receiverId?: true;
    amount?: true;
    fee?: true;
    type?: true;
    status?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TransactionCountAggregateInputType = {
    id?: true;
    reference?: true;
    senderId?: true;
    receiverId?: true;
    amount?: true;
    fee?: true;
    type?: true;
    status?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TransactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TransactionCountAggregateInputType;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
};
export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
    [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransaction[P]> : Prisma.GetScalarType<T[P], AggregateTransaction[P]>;
};
export type TransactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithAggregationInput | Prisma.TransactionOrderByWithAggregationInput[];
    by: Prisma.TransactionScalarFieldEnum[] | Prisma.TransactionScalarFieldEnum;
    having?: Prisma.TransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionCountAggregateInputType | true;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
};
export type TransactionGroupByOutputType = {
    id: string;
    reference: string;
    senderId: string;
    receiverId: string | null;
    amount: runtime.Decimal;
    fee: runtime.Decimal;
    type: $Enums.TransactionType;
    status: $Enums.TransactionStatus;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
};
export type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransactionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransactionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransactionGroupByOutputType[P]>;
}>>;
export type TransactionWhereInput = {
    AND?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    OR?: Prisma.TransactionWhereInput[];
    NOT?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    id?: Prisma.StringFilter<"Transaction"> | string;
    reference?: Prisma.StringFilter<"Transaction"> | string;
    senderId?: Prisma.StringFilter<"Transaction"> | string;
    receiverId?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    amount?: Prisma.DecimalFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    description?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    senderAccount?: Prisma.XOR<Prisma.AccountScalarRelationFilter, Prisma.AccountWhereInput>;
    receiverAccount?: Prisma.XOR<Prisma.AccountNullableScalarRelationFilter, Prisma.AccountWhereInput> | null;
};
export type TransactionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    senderAccount?: Prisma.AccountOrderByWithRelationInput;
    receiverAccount?: Prisma.AccountOrderByWithRelationInput;
};
export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    reference?: string;
    AND?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    OR?: Prisma.TransactionWhereInput[];
    NOT?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    senderId?: Prisma.StringFilter<"Transaction"> | string;
    receiverId?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    amount?: Prisma.DecimalFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    description?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    senderAccount?: Prisma.XOR<Prisma.AccountScalarRelationFilter, Prisma.AccountWhereInput>;
    receiverAccount?: Prisma.XOR<Prisma.AccountNullableScalarRelationFilter, Prisma.AccountWhereInput> | null;
}, "id" | "reference">;
export type TransactionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TransactionCountOrderByAggregateInput;
    _avg?: Prisma.TransactionAvgOrderByAggregateInput;
    _max?: Prisma.TransactionMaxOrderByAggregateInput;
    _min?: Prisma.TransactionMinOrderByAggregateInput;
    _sum?: Prisma.TransactionSumOrderByAggregateInput;
};
export type TransactionScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransactionScalarWhereWithAggregatesInput | Prisma.TransactionScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransactionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransactionScalarWhereWithAggregatesInput | Prisma.TransactionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    reference?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    senderId?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    receiverId?: Prisma.StringNullableWithAggregatesFilter<"Transaction"> | string | null;
    amount?: Prisma.DecimalWithAggregatesFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalWithAggregatesFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus;
    description?: Prisma.StringNullableWithAggregatesFilter<"Transaction"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
};
export type TransactionCreateInput = {
    id?: string;
    reference: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    senderAccount: Prisma.AccountCreateNestedOneWithoutSentTransactionsInput;
    receiverAccount?: Prisma.AccountCreateNestedOneWithoutReceivedTransactionsInput;
};
export type TransactionUncheckedCreateInput = {
    id?: string;
    reference: string;
    senderId: string;
    receiverId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransactionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    senderAccount?: Prisma.AccountUpdateOneRequiredWithoutSentTransactionsNestedInput;
    receiverAccount?: Prisma.AccountUpdateOneWithoutReceivedTransactionsNestedInput;
};
export type TransactionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionCreateManyInput = {
    id?: string;
    reference: string;
    senderId: string;
    receiverId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransactionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionListRelationFilter = {
    every?: Prisma.TransactionWhereInput;
    some?: Prisma.TransactionWhereInput;
    none?: Prisma.TransactionWhereInput;
};
export type TransactionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TransactionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TransactionAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
};
export type TransactionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TransactionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    receiverId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TransactionSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    fee?: Prisma.SortOrder;
};
export type TransactionCreateNestedManyWithoutSenderAccountInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutSenderAccountInput, Prisma.TransactionUncheckedCreateWithoutSenderAccountInput> | Prisma.TransactionCreateWithoutSenderAccountInput[] | Prisma.TransactionUncheckedCreateWithoutSenderAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutSenderAccountInput | Prisma.TransactionCreateOrConnectWithoutSenderAccountInput[];
    createMany?: Prisma.TransactionCreateManySenderAccountInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionCreateNestedManyWithoutReceiverAccountInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutReceiverAccountInput, Prisma.TransactionUncheckedCreateWithoutReceiverAccountInput> | Prisma.TransactionCreateWithoutReceiverAccountInput[] | Prisma.TransactionUncheckedCreateWithoutReceiverAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutReceiverAccountInput | Prisma.TransactionCreateOrConnectWithoutReceiverAccountInput[];
    createMany?: Prisma.TransactionCreateManyReceiverAccountInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutSenderAccountInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutSenderAccountInput, Prisma.TransactionUncheckedCreateWithoutSenderAccountInput> | Prisma.TransactionCreateWithoutSenderAccountInput[] | Prisma.TransactionUncheckedCreateWithoutSenderAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutSenderAccountInput | Prisma.TransactionCreateOrConnectWithoutSenderAccountInput[];
    createMany?: Prisma.TransactionCreateManySenderAccountInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutReceiverAccountInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutReceiverAccountInput, Prisma.TransactionUncheckedCreateWithoutReceiverAccountInput> | Prisma.TransactionCreateWithoutReceiverAccountInput[] | Prisma.TransactionUncheckedCreateWithoutReceiverAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutReceiverAccountInput | Prisma.TransactionCreateOrConnectWithoutReceiverAccountInput[];
    createMany?: Prisma.TransactionCreateManyReceiverAccountInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUpdateManyWithoutSenderAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutSenderAccountInput, Prisma.TransactionUncheckedCreateWithoutSenderAccountInput> | Prisma.TransactionCreateWithoutSenderAccountInput[] | Prisma.TransactionUncheckedCreateWithoutSenderAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutSenderAccountInput | Prisma.TransactionCreateOrConnectWithoutSenderAccountInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutSenderAccountInput | Prisma.TransactionUpsertWithWhereUniqueWithoutSenderAccountInput[];
    createMany?: Prisma.TransactionCreateManySenderAccountInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutSenderAccountInput | Prisma.TransactionUpdateWithWhereUniqueWithoutSenderAccountInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutSenderAccountInput | Prisma.TransactionUpdateManyWithWhereWithoutSenderAccountInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUpdateManyWithoutReceiverAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutReceiverAccountInput, Prisma.TransactionUncheckedCreateWithoutReceiverAccountInput> | Prisma.TransactionCreateWithoutReceiverAccountInput[] | Prisma.TransactionUncheckedCreateWithoutReceiverAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutReceiverAccountInput | Prisma.TransactionCreateOrConnectWithoutReceiverAccountInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutReceiverAccountInput | Prisma.TransactionUpsertWithWhereUniqueWithoutReceiverAccountInput[];
    createMany?: Prisma.TransactionCreateManyReceiverAccountInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutReceiverAccountInput | Prisma.TransactionUpdateWithWhereUniqueWithoutReceiverAccountInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutReceiverAccountInput | Prisma.TransactionUpdateManyWithWhereWithoutReceiverAccountInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutSenderAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutSenderAccountInput, Prisma.TransactionUncheckedCreateWithoutSenderAccountInput> | Prisma.TransactionCreateWithoutSenderAccountInput[] | Prisma.TransactionUncheckedCreateWithoutSenderAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutSenderAccountInput | Prisma.TransactionCreateOrConnectWithoutSenderAccountInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutSenderAccountInput | Prisma.TransactionUpsertWithWhereUniqueWithoutSenderAccountInput[];
    createMany?: Prisma.TransactionCreateManySenderAccountInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutSenderAccountInput | Prisma.TransactionUpdateWithWhereUniqueWithoutSenderAccountInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutSenderAccountInput | Prisma.TransactionUpdateManyWithWhereWithoutSenderAccountInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutReceiverAccountNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutReceiverAccountInput, Prisma.TransactionUncheckedCreateWithoutReceiverAccountInput> | Prisma.TransactionCreateWithoutReceiverAccountInput[] | Prisma.TransactionUncheckedCreateWithoutReceiverAccountInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutReceiverAccountInput | Prisma.TransactionCreateOrConnectWithoutReceiverAccountInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutReceiverAccountInput | Prisma.TransactionUpsertWithWhereUniqueWithoutReceiverAccountInput[];
    createMany?: Prisma.TransactionCreateManyReceiverAccountInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutReceiverAccountInput | Prisma.TransactionUpdateWithWhereUniqueWithoutReceiverAccountInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutReceiverAccountInput | Prisma.TransactionUpdateManyWithWhereWithoutReceiverAccountInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType;
};
export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type TransactionCreateWithoutSenderAccountInput = {
    id?: string;
    reference: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    receiverAccount?: Prisma.AccountCreateNestedOneWithoutReceivedTransactionsInput;
};
export type TransactionUncheckedCreateWithoutSenderAccountInput = {
    id?: string;
    reference: string;
    receiverId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransactionCreateOrConnectWithoutSenderAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutSenderAccountInput, Prisma.TransactionUncheckedCreateWithoutSenderAccountInput>;
};
export type TransactionCreateManySenderAccountInputEnvelope = {
    data: Prisma.TransactionCreateManySenderAccountInput | Prisma.TransactionCreateManySenderAccountInput[];
    skipDuplicates?: boolean;
};
export type TransactionCreateWithoutReceiverAccountInput = {
    id?: string;
    reference: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    senderAccount: Prisma.AccountCreateNestedOneWithoutSentTransactionsInput;
};
export type TransactionUncheckedCreateWithoutReceiverAccountInput = {
    id?: string;
    reference: string;
    senderId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransactionCreateOrConnectWithoutReceiverAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutReceiverAccountInput, Prisma.TransactionUncheckedCreateWithoutReceiverAccountInput>;
};
export type TransactionCreateManyReceiverAccountInputEnvelope = {
    data: Prisma.TransactionCreateManyReceiverAccountInput | Prisma.TransactionCreateManyReceiverAccountInput[];
    skipDuplicates?: boolean;
};
export type TransactionUpsertWithWhereUniqueWithoutSenderAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutSenderAccountInput, Prisma.TransactionUncheckedUpdateWithoutSenderAccountInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutSenderAccountInput, Prisma.TransactionUncheckedCreateWithoutSenderAccountInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutSenderAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutSenderAccountInput, Prisma.TransactionUncheckedUpdateWithoutSenderAccountInput>;
};
export type TransactionUpdateManyWithWhereWithoutSenderAccountInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutSenderAccountInput>;
};
export type TransactionScalarWhereInput = {
    AND?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
    OR?: Prisma.TransactionScalarWhereInput[];
    NOT?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
    id?: Prisma.StringFilter<"Transaction"> | string;
    reference?: Prisma.StringFilter<"Transaction"> | string;
    senderId?: Prisma.StringFilter<"Transaction"> | string;
    receiverId?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    amount?: Prisma.DecimalFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    description?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
};
export type TransactionUpsertWithWhereUniqueWithoutReceiverAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutReceiverAccountInput, Prisma.TransactionUncheckedUpdateWithoutReceiverAccountInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutReceiverAccountInput, Prisma.TransactionUncheckedCreateWithoutReceiverAccountInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutReceiverAccountInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutReceiverAccountInput, Prisma.TransactionUncheckedUpdateWithoutReceiverAccountInput>;
};
export type TransactionUpdateManyWithWhereWithoutReceiverAccountInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutReceiverAccountInput>;
};
export type TransactionCreateManySenderAccountInput = {
    id?: string;
    reference: string;
    receiverId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransactionCreateManyReceiverAccountInput = {
    id?: string;
    reference: string;
    senderId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TransactionUpdateWithoutSenderAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receiverAccount?: Prisma.AccountUpdateOneWithoutReceivedTransactionsNestedInput;
};
export type TransactionUncheckedUpdateWithoutSenderAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionUncheckedUpdateManyWithoutSenderAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    receiverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionUpdateWithoutReceiverAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    senderAccount?: Prisma.AccountUpdateOneRequiredWithoutSentTransactionsNestedInput;
};
export type TransactionUncheckedUpdateWithoutReceiverAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionUncheckedUpdateManyWithoutReceiverAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fee?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TransactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reference?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    amount?: boolean;
    fee?: boolean;
    type?: boolean;
    status?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    senderAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    receiverAccount?: boolean | Prisma.Transaction$receiverAccountArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reference?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    amount?: boolean;
    fee?: boolean;
    type?: boolean;
    status?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    senderAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    receiverAccount?: boolean | Prisma.Transaction$receiverAccountArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reference?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    amount?: boolean;
    fee?: boolean;
    type?: boolean;
    status?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    senderAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    receiverAccount?: boolean | Prisma.Transaction$receiverAccountArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectScalar = {
    id?: boolean;
    reference?: boolean;
    senderId?: boolean;
    receiverId?: boolean;
    amount?: boolean;
    fee?: boolean;
    type?: boolean;
    status?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TransactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reference" | "senderId" | "receiverId" | "amount" | "fee" | "type" | "status" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>;
export type TransactionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    senderAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    receiverAccount?: boolean | Prisma.Transaction$receiverAccountArgs<ExtArgs>;
};
export type TransactionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    senderAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    receiverAccount?: boolean | Prisma.Transaction$receiverAccountArgs<ExtArgs>;
};
export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    senderAccount?: boolean | Prisma.AccountDefaultArgs<ExtArgs>;
    receiverAccount?: boolean | Prisma.Transaction$receiverAccountArgs<ExtArgs>;
};
export type $TransactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Transaction";
    objects: {
        senderAccount: Prisma.$AccountPayload<ExtArgs>;
        receiverAccount: Prisma.$AccountPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reference: string;
        senderId: string;
        receiverId: string | null;
        amount: runtime.Decimal;
        fee: runtime.Decimal;
        type: $Enums.TransactionType;
        status: $Enums.TransactionStatus;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["transaction"]>;
    composites: {};
};
export type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransactionPayload, S>;
export type TransactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransactionCountAggregateInputType | true;
};
export interface TransactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Transaction'];
        meta: {
            name: 'Transaction';
        };
    };
    findUnique<T extends TransactionFindUniqueArgs>(args: Prisma.SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TransactionFindFirstArgs>(args?: Prisma.SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TransactionFindManyArgs>(args?: Prisma.SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TransactionCreateArgs>(args: Prisma.SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TransactionCreateManyArgs>(args?: Prisma.SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TransactionDeleteArgs>(args: Prisma.SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TransactionUpdateArgs>(args: Prisma.SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TransactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TransactionUpdateManyArgs>(args: Prisma.SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TransactionUpsertArgs>(args: Prisma.SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TransactionCountArgs>(args?: Prisma.Subset<T, TransactionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransactionCountAggregateOutputType> : number>;
    aggregate<T extends TransactionAggregateArgs>(args: Prisma.Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;
    groupBy<T extends TransactionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransactionGroupByArgs['orderBy'];
    } : {
        orderBy?: TransactionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TransactionFieldRefs;
}
export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    senderAccount<T extends Prisma.AccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AccountDefaultArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    receiverAccount<T extends Prisma.Transaction$receiverAccountArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Transaction$receiverAccountArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TransactionFieldRefs {
    readonly id: Prisma.FieldRef<"Transaction", 'String'>;
    readonly reference: Prisma.FieldRef<"Transaction", 'String'>;
    readonly senderId: Prisma.FieldRef<"Transaction", 'String'>;
    readonly receiverId: Prisma.FieldRef<"Transaction", 'String'>;
    readonly amount: Prisma.FieldRef<"Transaction", 'Decimal'>;
    readonly fee: Prisma.FieldRef<"Transaction", 'Decimal'>;
    readonly type: Prisma.FieldRef<"Transaction", 'TransactionType'>;
    readonly status: Prisma.FieldRef<"Transaction", 'TransactionStatus'>;
    readonly description: Prisma.FieldRef<"Transaction", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Transaction", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Transaction", 'DateTime'>;
}
export type TransactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where: Prisma.TransactionWhereUniqueInput;
};
export type TransactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where: Prisma.TransactionWhereUniqueInput;
};
export type TransactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type TransactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type TransactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type TransactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransactionCreateInput, Prisma.TransactionUncheckedCreateInput>;
};
export type TransactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TransactionCreateManyInput | Prisma.TransactionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TransactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    data: Prisma.TransactionCreateManyInput | Prisma.TransactionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TransactionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TransactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransactionUpdateInput, Prisma.TransactionUncheckedUpdateInput>;
    where: Prisma.TransactionWhereUniqueInput;
};
export type TransactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyInput>;
    where?: Prisma.TransactionWhereInput;
    limit?: number;
};
export type TransactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyInput>;
    where?: Prisma.TransactionWhereInput;
    limit?: number;
    include?: Prisma.TransactionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TransactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateInput, Prisma.TransactionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TransactionUpdateInput, Prisma.TransactionUncheckedUpdateInput>;
};
export type TransactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where: Prisma.TransactionWhereUniqueInput;
};
export type TransactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
    limit?: number;
};
export type Transaction$receiverAccountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
};
export type TransactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
};
