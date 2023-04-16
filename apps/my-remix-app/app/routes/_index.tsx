// apps/my-remix-app/app/routes/index.tsx
import { Button } from 'shared-ui';
export default function Index() {
  return (
    <div>
      <Button onClick={() => console.log('clicked')}>Click me</Button>
    </div>
  );
}
