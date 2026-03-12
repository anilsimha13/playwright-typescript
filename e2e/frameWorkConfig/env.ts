export class Env {
  public static readonly BASE_URL: string =
    process.env.BASE_URL ??
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
  public static readonly USERNAME: string = process.env.USERNAME ?? "default";
  public static readonly PASSWORD: string =
    process.env.PASSWORD ?? "default123";
}
