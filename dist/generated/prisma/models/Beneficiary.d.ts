import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type BeneficiaryModel = runtime.Types.Result.DefaultSelection<Prisma.$BeneficiaryPayload>;
export type AggregateBeneficiary = {
    _count: BeneficiaryCountAggregateOutputType | null;
    _min: BeneficiaryMinAggregateOutputType | null;
    _max: BeneficiaryMaxAggregateOutputType | null;
};
export type BeneficiaryMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    accountNumber: string | null;
    bankName: string | null;
    type: string | null;
    createdAt: Date | null;
};
export type BeneficiaryMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    accountNumber: string | null;
    bankName: string | null;
    type: string | null;
    createdAt: Date | null;
};
export type BeneficiaryCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    accountNumber: number;
    bankName: number;
    type: number;
    createdAt: number;
    _all: number;
};
export type BeneficiaryMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    accountNumber?: true;
    bankName?: true;
    type?: true;
    createdAt?: true;
};
export type BeneficiaryMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    accountNumber?: true;
    bankName?: true;
    type?: true;
    createdAt?: true;
};
export type BeneficiaryCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    accountNumber?: true;
    bankName?: true;
    type?: true;
    createdAt?: true;
    _all?: true;
};
export type BeneficiaryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BeneficiaryWhereInput;
    orderBy?: Prisma.BeneficiaryOrderByWithRelationInput | Prisma.BeneficiaryOrderByWithRelationInput[];
    cursor?: Prisma.BeneficiaryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BeneficiaryCountAggregateInputType;
    _min?: BeneficiaryMinAggregateInputType;
    _max?: BeneficiaryMaxAggregateInputType;
};
export type GetBeneficiaryAggregateType<T extends BeneficiaryAggregateArgs> = {
    [P in keyof T & keyof AggregateBeneficiary]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBeneficiary[P]> : Prisma.GetScalarType<T[P], AggregateBeneficiary[P]>;
};
export type BeneficiaryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BeneficiaryWhereInput;
    orderBy?: Prisma.BeneficiaryOrderByWithAggregationInput | Prisma.BeneficiaryOrderByWithAggregationInput[];
    by: Prisma.BeneficiaryScalarFieldEnum[] | Prisma.BeneficiaryScalarFieldEnum;
    having?: Prisma.BeneficiaryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BeneficiaryCountAggregateInputType | true;
    _min?: BeneficiaryMinAggregateInputType;
    _max?: BeneficiaryMaxAggregateInputType;
};
export type BeneficiaryGroupByOutputType = {
    id: string;
    userId: string;
    name: string;
    accountNumber: string;
    bankName: string;
    type: string;
    createdAt: Date;
    _count: BeneficiaryCountAggregateOutputType | null;
    _min: BeneficiaryMinAggregateOutputType | null;
    _max: BeneficiaryMaxAggregateOutputType | null;
};
export type GetBeneficiaryGroupByPayload<T extends BeneficiaryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BeneficiaryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BeneficiaryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BeneficiaryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BeneficiaryGroupByOutputType[P]>;
}>>;
export type BeneficiaryWhereInput = {
    AND?: Prisma.BeneficiaryWhereInput | Prisma.BeneficiaryWhereInput[];
    OR?: Prisma.BeneficiaryWhereInput[];
    NOT?: Prisma.BeneficiaryWhereInput | Prisma.BeneficiaryWhereInput[];
    id?: Prisma.StringFilter<"Beneficiary"> | string;
    userId?: Prisma.StringFilter<"Beneficiary"> | string;
    name?: Prisma.StringFilter<"Beneficiary"> | string;
    accountNumber?: Prisma.StringFilter<"Beneficiary"> | string;
    bankName?: Prisma.StringFilter<"Beneficiary"> | string;
    type?: Prisma.StringFilter<"Beneficiary"> | string;
    createdAt?: Prisma.DateTimeFilter<"Beneficiary"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BeneficiaryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type BeneficiaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BeneficiaryWhereInput | Prisma.BeneficiaryWhereInput[];
    OR?: Prisma.BeneficiaryWhereInput[];
    NOT?: Prisma.BeneficiaryWhereInput | Prisma.BeneficiaryWhereInput[];
    userId?: Prisma.StringFilter<"Beneficiary"> | string;
    name?: Prisma.StringFilter<"Beneficiary"> | string;
    accountNumber?: Prisma.StringFilter<"Beneficiary"> | string;
    bankName?: Prisma.StringFilter<"Beneficiary"> | string;
    type?: Prisma.StringFilter<"Beneficiary"> | string;
    createdAt?: Prisma.DateTimeFilter<"Beneficiary"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type BeneficiaryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BeneficiaryCountOrderByAggregateInput;
    _max?: Prisma.BeneficiaryMaxOrderByAggregateInput;
    _min?: Prisma.BeneficiaryMinOrderByAggregateInput;
};
export type BeneficiaryScalarWhereWithAggregatesInput = {
    AND?: Prisma.BeneficiaryScalarWhereWithAggregatesInput | Prisma.BeneficiaryScalarWhereWithAggregatesInput[];
    OR?: Prisma.BeneficiaryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BeneficiaryScalarWhereWithAggregatesInput | Prisma.BeneficiaryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Beneficiary"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Beneficiary"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Beneficiary"> | string;
    accountNumber?: Prisma.StringWithAggregatesFilter<"Beneficiary"> | string;
    bankName?: Prisma.StringWithAggregatesFilter<"Beneficiary"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Beneficiary"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Beneficiary"> | Date | string;
};
export type BeneficiaryCreateInput = {
    id?: string;
    name: string;
    accountNumber: string;
    bankName: string;
    type?: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutBeneficiariesInput;
};
export type BeneficiaryUncheckedCreateInput = {
    id?: string;
    userId: string;
    name: string;
    accountNumber: string;
    bankName: string;
    type?: string;
    createdAt?: Date | string;
};
export type BeneficiaryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutBeneficiariesNestedInput;
};
export type BeneficiaryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BeneficiaryCreateManyInput = {
    id?: string;
    userId: string;
    name: string;
    accountNumber: string;
    bankName: string;
    type?: string;
    createdAt?: Date | string;
};
export type BeneficiaryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BeneficiaryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BeneficiaryListRelationFilter = {
    every?: Prisma.BeneficiaryWhereInput;
    some?: Prisma.BeneficiaryWhereInput;
    none?: Prisma.BeneficiaryWhereInput;
};
export type BeneficiaryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BeneficiaryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BeneficiaryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BeneficiaryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    bankName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BeneficiaryCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BeneficiaryCreateWithoutUserInput, Prisma.BeneficiaryUncheckedCreateWithoutUserInput> | Prisma.BeneficiaryCreateWithoutUserInput[] | Prisma.BeneficiaryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BeneficiaryCreateOrConnectWithoutUserInput | Prisma.BeneficiaryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BeneficiaryCreateManyUserInputEnvelope;
    connect?: Prisma.BeneficiaryWhereUniqueInput | Prisma.BeneficiaryWhereUniqueInput[];
};
export type BeneficiaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BeneficiaryCreateWithoutUserInput, Prisma.BeneficiaryUncheckedCreateWithoutUserInput> | Prisma.BeneficiaryCreateWithoutUserInput[] | Prisma.BeneficiaryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BeneficiaryCreateOrConnectWithoutUserInput | Prisma.BeneficiaryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BeneficiaryCreateManyUserInputEnvelope;
    connect?: Prisma.BeneficiaryWhereUniqueInput | Prisma.BeneficiaryWhereUniqueInput[];
};
export type BeneficiaryUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BeneficiaryCreateWithoutUserInput, Prisma.BeneficiaryUncheckedCreateWithoutUserInput> | Prisma.BeneficiaryCreateWithoutUserInput[] | Prisma.BeneficiaryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BeneficiaryCreateOrConnectWithoutUserInput | Prisma.BeneficiaryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BeneficiaryUpsertWithWhereUniqueWithoutUserInput | Prisma.BeneficiaryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BeneficiaryCreateManyUserInputEnvelope;
    set?: Prisma.BeneficiaryWhereUniqueInput | Prisma.BeneficiaryWhereUniqueInput[];
    disconnect?: Prisma.BeneficiaryWhereUniqueInput | Prisma.BeneficiaryWhereUniqueInput[];
    delete?: Prisma.BeneficiaryWhereUniqueInput | Prisma.BeneficiaryWhereUniqueInput[];
    connect?: Prisma.BeneficiaryWhereUniqueInput | Prisma.BeneficiaryWhereUniqueInput[];
    update?: Prisma.BeneficiaryUpdateWithWhereUniqueWithoutUserInput | Prisma.BeneficiaryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BeneficiaryUpdateManyWithWhereWithoutUserInput | Prisma.BeneficiaryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BeneficiaryScalarWhereInput | Prisma.BeneficiaryScalarWhereInput[];
};
export type BeneficiaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BeneficiaryCreateWithoutUserInput, Prisma.BeneficiaryUncheckedCreateWithoutUserInput> | Prisma.BeneficiaryCreateWithoutUserInput[] | Prisma.BeneficiaryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BeneficiaryCreateOrConnectWithoutUserInput | Prisma.BeneficiaryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BeneficiaryUpsertWithWhereUniqueWithoutUserInput | Prisma.BeneficiaryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BeneficiaryCreateManyUserInputEnvelope;
    set?: Prisma.BeneficiaryWhereUniqueInput | Prisma.BeneficiaryWhereUniqueInput[];
    disconnect?: Prisma.BeneficiaryWhereUniqueInput | Prisma.BeneficiaryWhereUniqueInput[];
    delete?: Prisma.BeneficiaryWhereUniqueInput | Prisma.BeneficiaryWhereUniqueInput[];
    connect?: Prisma.BeneficiaryWhereUniqueInput | Prisma.BeneficiaryWhereUniqueInput[];
    update?: Prisma.BeneficiaryUpdateWithWhereUniqueWithoutUserInput | Prisma.BeneficiaryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BeneficiaryUpdateManyWithWhereWithoutUserInput | Prisma.BeneficiaryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BeneficiaryScalarWhereInput | Prisma.BeneficiaryScalarWhereInput[];
};
export type BeneficiaryCreateWithoutUserInput = {
    id?: string;
    name: string;
    accountNumber: string;
    bankName: string;
    type?: string;
    createdAt?: Date | string;
};
export type BeneficiaryUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    accountNumber: string;
    bankName: string;
    type?: string;
    createdAt?: Date | string;
};
export type BeneficiaryCreateOrConnectWithoutUserInput = {
    where: Prisma.BeneficiaryWhereUniqueInput;
    create: Prisma.XOR<Prisma.BeneficiaryCreateWithoutUserInput, Prisma.BeneficiaryUncheckedCreateWithoutUserInput>;
};
export type BeneficiaryCreateManyUserInputEnvelope = {
    data: Prisma.BeneficiaryCreateManyUserInput | Prisma.BeneficiaryCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type BeneficiaryUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BeneficiaryWhereUniqueInput;
    update: Prisma.XOR<Prisma.BeneficiaryUpdateWithoutUserInput, Prisma.BeneficiaryUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BeneficiaryCreateWithoutUserInput, Prisma.BeneficiaryUncheckedCreateWithoutUserInput>;
};
export type BeneficiaryUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BeneficiaryWhereUniqueInput;
    data: Prisma.XOR<Prisma.BeneficiaryUpdateWithoutUserInput, Prisma.BeneficiaryUncheckedUpdateWithoutUserInput>;
};
export type BeneficiaryUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BeneficiaryScalarWhereInput;
    data: Prisma.XOR<Prisma.BeneficiaryUpdateManyMutationInput, Prisma.BeneficiaryUncheckedUpdateManyWithoutUserInput>;
};
export type BeneficiaryScalarWhereInput = {
    AND?: Prisma.BeneficiaryScalarWhereInput | Prisma.BeneficiaryScalarWhereInput[];
    OR?: Prisma.BeneficiaryScalarWhereInput[];
    NOT?: Prisma.BeneficiaryScalarWhereInput | Prisma.BeneficiaryScalarWhereInput[];
    id?: Prisma.StringFilter<"Beneficiary"> | string;
    userId?: Prisma.StringFilter<"Beneficiary"> | string;
    name?: Prisma.StringFilter<"Beneficiary"> | string;
    accountNumber?: Prisma.StringFilter<"Beneficiary"> | string;
    bankName?: Prisma.StringFilter<"Beneficiary"> | string;
    type?: Prisma.StringFilter<"Beneficiary"> | string;
    createdAt?: Prisma.DateTimeFilter<"Beneficiary"> | Date | string;
};
export type BeneficiaryCreateManyUserInput = {
    id?: string;
    name: string;
    accountNumber: string;
    bankName: string;
    type?: string;
    createdAt?: Date | string;
};
export type BeneficiaryUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BeneficiaryUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BeneficiaryUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    bankName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BeneficiarySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    accountNumber?: boolean;
    bankName?: boolean;
    type?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["beneficiary"]>;
export type BeneficiarySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    accountNumber?: boolean;
    bankName?: boolean;
    type?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["beneficiary"]>;
export type BeneficiarySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    accountNumber?: boolean;
    bankName?: boolean;
    type?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["beneficiary"]>;
export type BeneficiarySelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    accountNumber?: boolean;
    bankName?: boolean;
    type?: boolean;
    createdAt?: boolean;
};
export type BeneficiaryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "name" | "accountNumber" | "bankName" | "type" | "createdAt", ExtArgs["result"]["beneficiary"]>;
export type BeneficiaryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BeneficiaryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BeneficiaryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BeneficiaryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Beneficiary";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        name: string;
        accountNumber: string;
        bankName: string;
        type: string;
        createdAt: Date;
    }, ExtArgs["result"]["beneficiary"]>;
    composites: {};
};
export type BeneficiaryGetPayload<S extends boolean | null | undefined | BeneficiaryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload, S>;
export type BeneficiaryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BeneficiaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BeneficiaryCountAggregateInputType | true;
};
export interface BeneficiaryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Beneficiary'];
        meta: {
            name: 'Beneficiary';
        };
    };
    findUnique<T extends BeneficiaryFindUniqueArgs>(args: Prisma.SelectSubset<T, BeneficiaryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BeneficiaryClient<runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BeneficiaryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BeneficiaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BeneficiaryClient<runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BeneficiaryFindFirstArgs>(args?: Prisma.SelectSubset<T, BeneficiaryFindFirstArgs<ExtArgs>>): Prisma.Prisma__BeneficiaryClient<runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BeneficiaryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BeneficiaryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BeneficiaryClient<runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BeneficiaryFindManyArgs>(args?: Prisma.SelectSubset<T, BeneficiaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BeneficiaryCreateArgs>(args: Prisma.SelectSubset<T, BeneficiaryCreateArgs<ExtArgs>>): Prisma.Prisma__BeneficiaryClient<runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BeneficiaryCreateManyArgs>(args?: Prisma.SelectSubset<T, BeneficiaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BeneficiaryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BeneficiaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BeneficiaryDeleteArgs>(args: Prisma.SelectSubset<T, BeneficiaryDeleteArgs<ExtArgs>>): Prisma.Prisma__BeneficiaryClient<runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BeneficiaryUpdateArgs>(args: Prisma.SelectSubset<T, BeneficiaryUpdateArgs<ExtArgs>>): Prisma.Prisma__BeneficiaryClient<runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BeneficiaryDeleteManyArgs>(args?: Prisma.SelectSubset<T, BeneficiaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BeneficiaryUpdateManyArgs>(args: Prisma.SelectSubset<T, BeneficiaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BeneficiaryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BeneficiaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BeneficiaryUpsertArgs>(args: Prisma.SelectSubset<T, BeneficiaryUpsertArgs<ExtArgs>>): Prisma.Prisma__BeneficiaryClient<runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BeneficiaryCountArgs>(args?: Prisma.Subset<T, BeneficiaryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BeneficiaryCountAggregateOutputType> : number>;
    aggregate<T extends BeneficiaryAggregateArgs>(args: Prisma.Subset<T, BeneficiaryAggregateArgs>): Prisma.PrismaPromise<GetBeneficiaryAggregateType<T>>;
    groupBy<T extends BeneficiaryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BeneficiaryGroupByArgs['orderBy'];
    } : {
        orderBy?: BeneficiaryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BeneficiaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeneficiaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BeneficiaryFieldRefs;
}
export interface Prisma__BeneficiaryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BeneficiaryFieldRefs {
    readonly id: Prisma.FieldRef<"Beneficiary", 'String'>;
    readonly userId: Prisma.FieldRef<"Beneficiary", 'String'>;
    readonly name: Prisma.FieldRef<"Beneficiary", 'String'>;
    readonly accountNumber: Prisma.FieldRef<"Beneficiary", 'String'>;
    readonly bankName: Prisma.FieldRef<"Beneficiary", 'String'>;
    readonly type: Prisma.FieldRef<"Beneficiary", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Beneficiary", 'DateTime'>;
}
export type BeneficiaryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelect<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    include?: Prisma.BeneficiaryInclude<ExtArgs> | null;
    where: Prisma.BeneficiaryWhereUniqueInput;
};
export type BeneficiaryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelect<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    include?: Prisma.BeneficiaryInclude<ExtArgs> | null;
    where: Prisma.BeneficiaryWhereUniqueInput;
};
export type BeneficiaryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelect<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    include?: Prisma.BeneficiaryInclude<ExtArgs> | null;
    where?: Prisma.BeneficiaryWhereInput;
    orderBy?: Prisma.BeneficiaryOrderByWithRelationInput | Prisma.BeneficiaryOrderByWithRelationInput[];
    cursor?: Prisma.BeneficiaryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BeneficiaryScalarFieldEnum | Prisma.BeneficiaryScalarFieldEnum[];
};
export type BeneficiaryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelect<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    include?: Prisma.BeneficiaryInclude<ExtArgs> | null;
    where?: Prisma.BeneficiaryWhereInput;
    orderBy?: Prisma.BeneficiaryOrderByWithRelationInput | Prisma.BeneficiaryOrderByWithRelationInput[];
    cursor?: Prisma.BeneficiaryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BeneficiaryScalarFieldEnum | Prisma.BeneficiaryScalarFieldEnum[];
};
export type BeneficiaryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelect<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    include?: Prisma.BeneficiaryInclude<ExtArgs> | null;
    where?: Prisma.BeneficiaryWhereInput;
    orderBy?: Prisma.BeneficiaryOrderByWithRelationInput | Prisma.BeneficiaryOrderByWithRelationInput[];
    cursor?: Prisma.BeneficiaryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BeneficiaryScalarFieldEnum | Prisma.BeneficiaryScalarFieldEnum[];
};
export type BeneficiaryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelect<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    include?: Prisma.BeneficiaryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BeneficiaryCreateInput, Prisma.BeneficiaryUncheckedCreateInput>;
};
export type BeneficiaryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BeneficiaryCreateManyInput | Prisma.BeneficiaryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BeneficiaryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    data: Prisma.BeneficiaryCreateManyInput | Prisma.BeneficiaryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BeneficiaryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BeneficiaryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelect<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    include?: Prisma.BeneficiaryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BeneficiaryUpdateInput, Prisma.BeneficiaryUncheckedUpdateInput>;
    where: Prisma.BeneficiaryWhereUniqueInput;
};
export type BeneficiaryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BeneficiaryUpdateManyMutationInput, Prisma.BeneficiaryUncheckedUpdateManyInput>;
    where?: Prisma.BeneficiaryWhereInput;
    limit?: number;
};
export type BeneficiaryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BeneficiaryUpdateManyMutationInput, Prisma.BeneficiaryUncheckedUpdateManyInput>;
    where?: Prisma.BeneficiaryWhereInput;
    limit?: number;
    include?: Prisma.BeneficiaryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BeneficiaryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelect<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    include?: Prisma.BeneficiaryInclude<ExtArgs> | null;
    where: Prisma.BeneficiaryWhereUniqueInput;
    create: Prisma.XOR<Prisma.BeneficiaryCreateInput, Prisma.BeneficiaryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BeneficiaryUpdateInput, Prisma.BeneficiaryUncheckedUpdateInput>;
};
export type BeneficiaryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelect<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    include?: Prisma.BeneficiaryInclude<ExtArgs> | null;
    where: Prisma.BeneficiaryWhereUniqueInput;
};
export type BeneficiaryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BeneficiaryWhereInput;
    limit?: number;
};
export type BeneficiaryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelect<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    include?: Prisma.BeneficiaryInclude<ExtArgs> | null;
};
