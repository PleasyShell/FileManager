export type TCataloge = {
    Name: string;
    Cataloge: TCataloge[] | null;
    isExpanded?: boolean;
};

export type TDisk = {
    Name: string;
    Cataloge: TCataloge[];
    isExpanded?: boolean;
};
