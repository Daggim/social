import {
  FacebookFilled,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  GithubFilled,
  GoogleOutlined,
} from "@ant-design/icons";

const SocialLogin: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const onClickSocialLogin = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (isLoading) e.preventDefault();
  };

  return (
    <div className="w-full flex space-x-2 items-center">
      <a
        className="button w-full bg-blue-500 hover:bg-blue-600"
        href={`${process.env.REACT_APP_SOCIAL_URL}/api/v1/auth/facebook`}
        onClick={onClickSocialLogin}
      >
        <FacebookFilled className="m-0 laptop:mr-4 text-xl laptop:text-sm" />
        <span className="hidden laptop:inline-block">Facebook</span>
      </a>
      <a
        className="button w-full text-gray-800 bg-white hover:bg-gray-200 border border-gray-200"
        href={`${process.env.REACT_APP_SOCIAL_URL}/api/v1/auth/google`}
        onClick={onClickSocialLogin}
      >
        <GoogleOutlined className="m-0 laptop:mr-4 text-xl laptop:text-sm" />
        <span className="hidden laptop:inline-block">Google</span>
      </a>
    </div>
  );
};

export default SocialLogin;
