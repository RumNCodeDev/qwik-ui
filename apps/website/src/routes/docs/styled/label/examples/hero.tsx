import { component$ } from '@builder.io/qwik';
import { Checkbox, Label } from '~/components/ui';

export default component$(() => {
  return (
    <div>
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
});
