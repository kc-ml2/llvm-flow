from pydantic import BaseModel


class IdentifierBase(BaseModel):
    Identifier: str


class IdentifierCreate(IdentifierBase):
    pass


class Identifier(IdentifierBase):
    id: int

    class Config:
        orm_mode = True


class PassBase(BaseModel):
    transformpass: str
    Identifier_field: int


class PassCreate(PassBase):
    pass


class Pass(PassBase):
    id: int

    class Config:
        orm_mode = True


class FileBase(BaseModel):
    content: str
    Identifier_field: int


class FileCreate(FileBase):
    pass


class File(FileBase):
    id: int

    class Config:
        orm_mode = True
