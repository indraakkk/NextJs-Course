import { useRouter } from 'next/router';

function SelectedProjectClientPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The Selected Project from Selected Client</h1>
    </div>
  );
}

export default SelectedProjectClientPage;
