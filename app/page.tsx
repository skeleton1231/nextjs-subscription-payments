// pages/pricing.tsx
import Pricing from '@/components/ui/Pricing/Pricing';
import { createClient } from '@/utils/supabase/server';
import {
  getProducts,
  getUser,
  getUserSubscriptions
} from '@/utils/supabase/queries';

export default async function PricingPage() {
  const supabase = createClient();
  const user = await getUser(supabase);

  const [products, subscriptions] = await Promise.all([
    getProducts(supabase),
    getUserSubscriptions(supabase, user),
  ]);

  return (
    <>
      <Pricing
        user={user}
        products={products ?? []}
        subscriptions={subscriptions}
      />
    </>
  );
}
