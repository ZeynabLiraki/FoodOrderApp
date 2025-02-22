export type ErrorProps = {
  title: string;
  message: string;
};
export default function ErrorPage({ title, message }: ErrorProps) {
  return (
    <div className="error">
      <h1>
        {title}
      </h1>
      <p>
        {message}
      </p>
    </div>
  );
}
