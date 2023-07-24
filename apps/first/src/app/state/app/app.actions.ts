export class ShowLoading {
  public static readonly type = '[App] ShowLoading';
  constructor(public loading: boolean) {}
}
export class ChangeEmail {
  public static readonly type = '[App] ChangeEmail';
  constructor(public email: string) {}
}
