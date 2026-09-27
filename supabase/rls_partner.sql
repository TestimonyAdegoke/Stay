-- Partner-readable views should expose only explicitly shared data.
create policy "partners read shared commitments" on commitments for select using (
 owner_id=auth.uid() or exists(select 1 from commitment_shares cs join accountability_links al on al.id=cs.link_id where cs.commitment_id=commitments.id and al.partner_id=auth.uid() and al.status='active')
);
create policy "participants read shares" on commitment_shares for select using(exists(select 1 from accountability_links al where al.id=commitment_shares.link_id and (al.owner_id=auth.uid() or al.partner_id=auth.uid())));
create policy "owners manage shares" on commitment_shares for all using(exists(select 1 from accountability_links al where al.id=commitment_shares.link_id and al.owner_id=auth.uid())) with check(exists(select 1 from accountability_links al where al.id=commitment_shares.link_id and al.owner_id=auth.uid()));
-- Enforcement-event partner access should be implemented through a scoped RPC/view that verifies commitment_shares.share_enforcement_events. Do not grant partners direct table SELECT.
