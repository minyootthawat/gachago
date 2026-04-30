import type { RewardItem } from "@/features/shop/types";

type OddsTableProps = {
  rewards: RewardItem[];
};

export function OddsTable({ rewards }: OddsTableProps) {
  const totalWeight = rewards.reduce((sum, reward) => sum + reward.weight, 0);

  return (
    <div className="overflow-hidden rounded-md border border-[var(--color-border)]">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/5 text-[var(--color-text-muted)]">
          <tr>
            <th className="px-4 py-3 font-medium">Reward</th>
            <th className="px-4 py-3 font-medium">Rarity</th>
            <th className="px-4 py-3 font-medium">Odds</th>
          </tr>
        </thead>
        <tbody>
          {rewards.map((reward) => (
            <tr key={reward.id} className="border-t border-[var(--color-border)]">
              <td className="px-4 py-3">{reward.name}</td>
              <td className="px-4 py-3">{reward.rarity.replace("_", " ")}</td>
              <td className="px-4 py-3">
                {((reward.weight / totalWeight) * 100).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

