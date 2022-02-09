/**
 * 管理者情報を表す部品用のクラス.
 */
export class Administrator {
  constructor(
    // 管理者ID
    private _id: number,
    // 管理者名前
    private _name: string,
    // 管理者メールアドレス
    private _mailAddress: string,
    // 管理者パスワード
    private _password: string
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get mailAddress(): string {
    return this._mailAddress;
  }

  public set mailAddress(mailAddress: string) {
    this._mailAddress = mailAddress;
  }

  public get password(): string {
    return this._password;
  }

  public set password(password: string) {
    this._password = password;
  }
}
