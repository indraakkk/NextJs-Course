import { useRouter } from 'next/router';

function ClientProjetsPage() {
  const router = useRouter();
  const pwd = router.pathname;

  function loadProjectHandler() {
    router.push({
      pathname: `${pwd}/[clientprojectid]`,
      query: { ...router.query, clientprojectid: 'projecta' },
    });
  }

  return (
    <div>
      <h1>The Projects of Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project</button>
    </div>
  );
}

export default ClientProjetsPage;
