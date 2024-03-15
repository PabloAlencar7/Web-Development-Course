import { UserCard } from "../components/UserCard";
import { useQueryCep } from "../hooks/useQueryCep";

type User = {
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  id: number;
};

export function App() {
  const { data, isLoading, error } = useQueryCep();
  console.log(data);
  if (error) {
    console.log(error);
  }

  return (
    <>
      <h1>App</h1>
      {isLoading && <div>Carregando...</div>}
      {!isLoading && error && <div>Erro...</div>}
      {data?.map((user: User) => {
        return (
        <UserCard key={user.id} name={user.name} username={user.username} phone={user.phone} email={user.email} website={user.website}/>
        );
      })}
    </>
  );
}
