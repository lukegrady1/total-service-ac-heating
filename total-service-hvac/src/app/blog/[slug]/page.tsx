import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, ChevronRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { blogPosts } from "@/app/blog/page";

// ─── Static post data ───────────────────────────────────────────────────────

interface PostContent {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  body: React.ReactNode;
}

// ─── Post bodies ────────────────────────────────────────────────────────────

function Post1Body() {
  return (
    <div className="prose-content">
      <p>
        If you ask an HVAC technician in Ohio how often you should service your air conditioner,
        they&apos;ll probably say once a year — typically in the spring before the cooling season
        begins. That&apos;s standard advice for most of the United States. But Florida is not most
        of the United States.
      </p>
      <p>
        In Central Florida, air conditioners run an average of{" "}
        <strong>10–12 months per year</strong>. Compare that to northern states where systems
        might run 3–5 months annually. More run time means more wear, more stress on components,
        and a far greater need for professional maintenance. Here&apos;s what every Florida
        homeowner needs to know.
      </p>

      <h2>Why Twice a Year Is the Florida Standard</h2>
      <p>
        The Florida Department of Energy and HVAC industry groups consistently recommend{" "}
        <strong>two professional maintenance visits per year</strong> for Central Florida
        homeowners — not one. The rationale is straightforward: your system works roughly twice
        as hard as an equivalent system up north, so it needs twice as much attention.
      </p>
      <p>
        Beyond sheer run hours, Florida&apos;s humidity creates specific maintenance challenges.
        High moisture levels accelerate mold and algae growth inside condensate drain lines, cause
        coil fouling, and create conditions where refrigerant leaks become more likely. These are
        issues that a once-yearly checkup can easily miss during the wrong season.
      </p>

      <h2>Spring Maintenance: Before Summer Heat Arrives</h2>
      <p>
        Your <strong>first annual tune-up should happen in March or April</strong>, before the
        summer cooling season begins in earnest. By late May, Central Florida is already recording
        temperatures in the upper 80s and low 90s — and your AC will run nearly continuously from
        then through October.
      </p>
      <p>Spring maintenance should include:</p>
      <ul>
        <li>Cleaning evaporator and condenser coils to restore heat transfer efficiency</li>
        <li>Checking and recharging refrigerant levels if necessary</li>
        <li>Testing capacitors, contactors, and electrical connections</li>
        <li>Clearing the condensate drain line to prevent summertime flooding</li>
        <li>Lubricating the blower motor and other moving parts</li>
        <li>Inspecting ductwork for leaks that waste conditioned air</li>
        <li>Calibrating the thermostat for accuracy</li>
      </ul>
      <p>
        Catching a failing capacitor or a dirty coil in April costs far less — and causes far
        less suffering — than discovering it when your system breaks down on a 95°F July afternoon.
        Explore our{" "}
        <Link href="/services/ac-maintenance" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          AC maintenance service
        </Link>{" "}
        to schedule your spring tune-up.
      </p>

      <h2>Fall Maintenance: After the Cooling Season</h2>
      <p>
        Your <strong>second tune-up should happen in October or November</strong>, after the
        intense summer cooling season ends. While Florida winters are mild, nighttime temperatures
        can drop into the 40s and 50s — particularly in January and February — meaning your heat
        pump or heating system will see real use.
      </p>
      <p>Fall maintenance focuses on:</p>
      <ul>
        <li>Inspecting heating elements or heat pump reversing valve function</li>
        <li>Checking refrigerant levels again after a full summer of use</li>
        <li>Replacing or cleaning air filters ahead of holiday indoor gatherings</li>
        <li>Inspecting for any wear that developed during the heavy summer workload</li>
        <li>Testing safety controls and thermostat heat mode</li>
      </ul>

      <h2>What Happens If You Skip Maintenance?</h2>
      <p>
        Skipping annual maintenance might seem like a way to save money. In reality, it typically
        costs more over time. Here&apos;s what the data shows:
      </p>
      <ul>
        <li>
          <strong>Energy costs rise</strong>: A dirty coil alone can reduce system efficiency by
          5–15%, adding $50–$200 annually to your electric bill.
        </li>
        <li>
          <strong>Breakdowns become more likely</strong>: Most emergency AC failures are
          preventable with routine maintenance. A $100 tune-up often prevents a $400–$1,500 repair.
        </li>
        <li>
          <strong>System life shortens</strong>: Properly maintained HVAC systems last 15–20 years
          in Florida. Neglected systems often fail at 8–12 years, requiring earlier replacement.
        </li>
        <li>
          <strong>Warranty may be voided</strong>: Many manufacturers require documented annual
          maintenance to honor warranty claims.
        </li>
      </ul>

      <h2>The Cost Savings Are Real</h2>
      <p>
        A professional maintenance visit from Total Service Air Conditioning & Heating typically
        costs $89–$149 per visit. If twice-yearly maintenance saves you just one major repair per
        year (which is statistically very likely), the savings can easily exceed $500–$1,000
        annually.
      </p>
      <p>
        Add in energy savings from a clean, efficient system and the extended equipment life, and
        the return on investment for regular HVAC maintenance in Florida is among the highest of
        any home maintenance activity.
      </p>

      <h2>Ready to Schedule?</h2>
      <p>
        Don&apos;t wait until your AC breaks down in the middle of summer to think about
        maintenance. Total Service Air Conditioning & Heating provides professional AC maintenance
        for homeowners across Orlando, Apopka, Winter Garden, Windermere, Maitland, and all of
        Central Florida.{" "}
        <Link href="/services/ac-maintenance" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          Schedule your tune-up today
        </Link>{" "}
        or call us at{" "}
        <a href="tel:+14076173510" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          (407) 617-3510
        </a>
        .
      </p>
    </div>
  );
}

function Post2Body() {
  return (
    <div className="prose-content">
      <p>
        No air conditioning unit lasts forever — especially in Florida, where the demand on HVAC
        systems is among the highest in the nation. The difficult question isn&apos;t whether
        you&apos;ll eventually need a replacement, but <em>when</em>. Replacing too soon wastes
        money; waiting too long means living through breakdowns and rising energy bills.
      </p>
      <p>
        Here are seven clear warning signs that it&apos;s time to consider replacing your AC
        system rather than continuing to repair it.
      </p>

      <h2>1. Your System Is 15 Years Old or More</h2>
      <p>
        The average lifespan of a central air conditioning system in Florida is 12–18 years with
        proper maintenance. In northern states, systems can last 20+ years because they run far
        fewer hours annually. If your unit is approaching or has passed the 15-year mark, even
        if it&apos;s still running, it&apos;s operating at significantly reduced efficiency and
        living on borrowed time.
      </p>
      <p>
        A 15-year-old system running at 10 SEER (the old minimum efficiency standard) can cost
        nearly twice as much to operate as a modern 18–21 SEER system. That efficiency gap
        translates to real money every month on your electric bill.
      </p>

      <h2>2. You&apos;re Calling for Repairs More Than Once a Year</h2>
      <p>
        One repair per year is manageable. Two or more significant repairs in a single year — or
        the same component failing repeatedly — is a red flag. Use the &ldquo;$5,000 rule&rdquo;:
        multiply the age of your system (in years) by the estimated repair cost. If the result
        exceeds $5,000, replacement is almost certainly the better investment.
      </p>
      <p>
        Example: a 12-year-old system facing a $500 compressor capacitor repair = $6,000 on the
        calculator. Time to talk replacement.
      </p>

      <h2>3. Your System Uses R-22 (Freon) Refrigerant</h2>
      <p>
        If your system was manufactured before 2010, it likely uses R-22 refrigerant — a
        substance that has been federally phased out. R-22 is no longer produced domestically,
        making it extraordinarily expensive when you can even find it. If your system has a
        refrigerant leak and runs on R-22, you&apos;re facing the choice between a very costly
        recharge (often $400–$1,200 or more) or replacement with a modern R-410A or R-32 system.
      </p>

      <h2>4. Your Energy Bills Are Steadily Rising</h2>
      <p>
        If your electric bills are climbing year over year despite consistent usage habits, your
        aging AC system is likely the culprit. Compressor wear, refrigerant loss, and accumulated
        coil fouling all cause the system to work harder for the same output. This inefficiency
        compounds over time.
      </p>
      <p>
        Pull up your utility bills from 3–5 years ago and compare them. A 20–30% increase in
        energy costs is a strong indicator that your system is significantly underperforming.
      </p>

      <h2>5. Uneven Cooling Across Your Home</h2>
      <p>
        Does one room feel like a freezer while another is sweltering? Uneven cooling in an
        older system often indicates a failing compressor that can no longer maintain adequate
        system pressure, severely degraded ductwork, or a unit that was undersized for the home
        from the start. Modern variable-speed systems with zoning controls eliminate this problem.
      </p>

      <h2>6. Strange Sounds or Smells</h2>
      <p>
        Grinding, rattling, banging, or high-pitched squealing noises typically indicate
        mechanical failures — loose components, a failing compressor, or motor bearing wear.
        Musty odors suggest mold growth inside the system or ductwork. Both issues in an older
        system often signal that it&apos;s approaching end of life.
      </p>

      <h2>7. You&apos;re Struggling to Control Indoor Humidity</h2>
      <p>
        An AC system&apos;s job in Florida isn&apos;t just cooling — it&apos;s dehumidifying. A
        failing or undersized system that can no longer adequately manage indoor humidity creates
        a sticky, uncomfortable environment and promotes mold and mildew growth. If your home
        feels humid even when the AC runs constantly, your system may no longer be up to the job.
      </p>

      <h2>When to Repair vs. Replace: The Bottom Line</h2>
      <p>
        Choose repair when: your system is under 10 years old, the repair is straightforward and
        under $500, and the unit has been well-maintained.
      </p>
      <p>
        Choose replacement when: your system is 12+ years old, you&apos;re facing a repair
        costing more than 50% of a new unit, the system uses R-22, or you&apos;re experiencing
        multiple symptoms from this list simultaneously.
      </p>
      <p>
        Our team can evaluate your current system and give you an honest assessment. Learn more
        about{" "}
        <Link href="/services/ac-installation" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          AC installation options
        </Link>{" "}
        or call{" "}
        <a href="tel:+14076173510" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          (407) 617-3510
        </a>{" "}
        to schedule a system evaluation.
      </p>
    </div>
  );
}

function Post3Body() {
  return (
    <div className="prose-content">
      <p>
        The thermostat setting debate is one of the most common questions we get from Florida
        homeowners — and the answer is more nuanced than a single number. Comfort, energy costs,
        humidity control, and long-term equipment health all factor into what temperature you
        should actually be running your AC at during a Florida summer.
      </p>

      <h2>The Recommended Range: 76–78°F</h2>
      <p>
        For most Central Florida homes, energy experts and HVAC professionals recommend setting
        your thermostat to{" "}
        <strong>76–78°F (24–26°C) when you&apos;re home</strong>. Here&apos;s why this range
        hits the sweet spot:
      </p>
      <ul>
        <li>
          <strong>Comfort</strong>: Most people find 76–78°F comfortable when humidity is properly
          managed, which is a crucial distinction for Florida.
        </li>
        <li>
          <strong>Efficiency</strong>: Every degree you raise your thermostat setting above 72°F
          reduces your cooling costs by approximately 3–5%. Setting 78°F instead of 72°F can cut
          cooling costs by 18–30%.
        </li>
        <li>
          <strong>Humidity control</strong>: Keeping your system cycling regularly (rather than
          turning it off frequently) is essential for managing Florida&apos;s humidity. Short-cycling
          by setting extremely low temperatures is actually counterproductive.
        </li>
      </ul>

      <h2>When You&apos;re Away: 82–85°F</h2>
      <p>
        When your home is unoccupied during the day, set the thermostat higher — typically
        82–85°F. Going higher than 85°F risks allowing humidity to climb to problematic levels,
        which can accelerate mold growth and damage wood furnishings. Never turn your AC
        completely off during Florida summers, no matter how long you&apos;re away.
      </p>

      <h2>Programmable Thermostat Strategies</h2>
      <p>
        A programmable or smart thermostat pays for itself quickly in Florida. Here&apos;s a
        sample schedule for a working household:
      </p>
      <ul>
        <li>
          <strong>6:00 AM – 8:00 AM</strong>: Pre-cool to 74°F before the day heats up
        </li>
        <li>
          <strong>8:00 AM – 5:00 PM</strong>: Set to 82°F while home is unoccupied
        </li>
        <li>
          <strong>5:00 PM – 10:00 PM</strong>: Return to 76–78°F for evening comfort
        </li>
        <li>
          <strong>10:00 PM – 6:00 AM</strong>: 78°F or slightly higher while sleeping
        </li>
      </ul>
      <p>
        This schedule can reduce annual cooling costs by 15–25% compared to running 72°F
        constantly — potentially saving $200–$500 per year in Florida&apos;s climate.
      </p>

      <h2>The Energy Savings Math</h2>
      <p>
        The average Central Florida home spends $150–$250 per month on electricity during summer,
        with cooling accounting for roughly 50–60% of that cost. At an average of $180/month,
        that&apos;s about $90–$108 in cooling costs monthly. Optimizing your thermostat
        settings by just 4–6 degrees (from a constant 72°F to 76–78°F) can save:
      </p>
      <ul>
        <li>Approximately $15–$25/month during summer months</li>
        <li>$90–$150 across the 6-month peak cooling season (May–October)</li>
        <li>$200–$350 annually when accounting for shoulder seasons</li>
      </ul>

      <h2>Humidity Control Is the Real Key</h2>
      <p>
        In Florida, perceived temperature is heavily influenced by humidity. A home at 78°F and
        50% relative humidity feels significantly more comfortable than a home at 74°F and 70%
        relative humidity. Keeping indoor humidity below 55% is the real target — and a properly
        maintained, appropriately sized AC system achieves this as a byproduct of cooling.
      </p>
      <p>
        If your home feels humid even with the AC running, the issue may be an oversized system
        (which cools too quickly to dehumidify effectively), or a system that needs maintenance.
        Our{" "}
        <Link href="/services/ac-maintenance" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          AC maintenance service
        </Link>{" "}
        addresses both performance and efficiency. Call us at{" "}
        <a href="tel:+14076173510" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          (407) 617-3510
        </a>{" "}
        to discuss your comfort concerns.
      </p>

      <h2>Quick Tips for Better Thermostat Management</h2>
      <ul>
        <li>Keep your thermostat away from heat sources like lamps, TVs, and sunny windows</li>
        <li>Use ceiling fans to maintain comfort at higher thermostat settings (fans don&apos;t cool air — they cool people)</li>
        <li>Close blinds and curtains on west-facing windows during afternoon hours</li>
        <li>Consider a smart thermostat that learns your schedule automatically</li>
      </ul>
    </div>
  );
}

function Post4Body() {
  return (
    <div className="prose-content">
      <p>
        Central Florida&apos;s climate is unlike almost anywhere else in the country — year-round
        heat, exceptional humidity, seasonal pollen surges, and the occasional cold snap that
        reminds us the heating system needs attention too. Your HVAC maintenance checklist should
        reflect these unique conditions.
      </p>
      <p>
        This guide breaks down HVAC maintenance into monthly, quarterly, and annual tasks, and
        clarifies which items you can handle yourself versus which require a licensed professional.
      </p>

      <h2>Monthly Tasks (DIY)</h2>
      <p>
        These are quick checks and tasks that every homeowner should perform every month,
        regardless of season:
      </p>
      <ul>
        <li>
          <strong>Replace or inspect the air filter</strong>: In Florida, most homes should change
          filters monthly — or every 3 weeks if you have pets or allergies. A dirty filter
          restricts airflow, strains your system, and degrades air quality significantly. Use
          MERV 8–11 rated filters for the best balance of filtration and airflow.
        </li>
        <li>
          <strong>Check the condensate drain pan</strong>: Look for standing water, which indicates
          a clogged drain line. Flush with a cup of distilled white vinegar monthly to prevent
          algae buildup — a very common Florida issue.
        </li>
        <li>
          <strong>Verify the thermostat is functioning</strong>: Run a quick test that the system
          reaches the set temperature within a reasonable time and cycles off properly.
        </li>
        <li>
          <strong>Listen for unusual sounds</strong>: Rattles, banging, grinding, or high-pitched
          whining are early warning signs of mechanical issues.
        </li>
      </ul>

      <h2>Quarterly Tasks (DIY + Some Pro)</h2>
      <ul>
        <li>
          <strong>Clean the outdoor condenser unit</strong>: Gently rinse the condenser fins with
          a garden hose (from the inside out, not outside in) to remove dirt, pollen, and debris.
          Florida&apos;s oak pollen season in spring can clog condenser fins rapidly. Keep at
          least 2 feet of clearance around the unit.
        </li>
        <li>
          <strong>Inspect ductwork connections in accessible areas</strong>: Loose or disconnected
          duct joints waste 20–30% of conditioned air in many Florida homes. Look in your attic
          access for obvious disconnections.
        </li>
        <li>
          <strong>Check vents and registers</strong>: Ensure all supply and return vents are open,
          unobstructed by furniture, and clean.
        </li>
        <li>
          <strong>Test smoke and CO detectors</strong>: While not directly HVAC-related, these
          safety devices should be checked quarterly.
        </li>
      </ul>

      <h2>Annual Professional Maintenance (Spring)</h2>
      <p>
        Your spring professional tune-up — ideally in March or April — is the most important
        maintenance event of the year. See our full guide on{" "}
        <Link href="/blog/how-often-should-you-service-your-ac-in-florida" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          how often to service your AC in Florida
        </Link>{" "}
        for the full rationale. A professional maintenance visit includes:
      </p>
      <ul>
        <li>Full electrical inspection and testing of all components</li>
        <li>Coil cleaning (evaporator and condenser)</li>
        <li>Refrigerant level check and leak inspection</li>
        <li>Condensate drain deep cleaning</li>
        <li>Blower motor and belt inspection</li>
        <li>Thermostat calibration</li>
        <li>Overall system efficiency assessment</li>
      </ul>

      <h2>Annual Professional Maintenance (Fall)</h2>
      <p>
        The fall tune-up in October or November addresses wear accumulated during the intense
        summer season and prepares your heating system for Florida&apos;s mild but real winters:
      </p>
      <ul>
        <li>Heating element or heat pump reversing valve inspection</li>
        <li>Post-summer refrigerant level verification</li>
        <li>Safety control testing in heat mode</li>
        <li>Ductwork inspection for leaks that developed during summer stress</li>
      </ul>

      <h2>Florida-Specific Considerations</h2>
      <p>
        A few HVAC maintenance considerations unique to Central Florida:
      </p>
      <ul>
        <li>
          <strong>Hurricane prep</strong>: Before hurricane season (June–November), ensure the
          outdoor unit is secured and know how to quickly shut down your system if needed. After
          a storm, inspect the unit for debris damage before restarting.
        </li>
        <li>
          <strong>Pollen season</strong>: Oak pollen (February–April) is exceptionally heavy in
          Central Florida. Inspect and clean condenser coils and change filters more frequently
          during these months.
        </li>
        <li>
          <strong>Humidity management</strong>: Consider adding a whole-home dehumidifier if your
          indoor relative humidity regularly exceeds 60%. This is especially common in
          well-insulated newer homes or homes near lakes.
        </li>
      </ul>

      <p>
        Ready to schedule your professional maintenance?{" "}
        <Link href="/services/ac-maintenance" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          View our AC maintenance service
        </Link>{" "}
        or call us at{" "}
        <a href="tel:+14076173510" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          (407) 617-3510
        </a>
        .
      </p>
    </div>
  );
}

function Post5Body() {
  return (
    <div className="prose-content">
      <p>
        Most Central Florida homeowners think of their AC as a cooling machine — and it is. But
        it&apos;s also one of the primary determinants of your indoor air quality. In a city like
        Orlando, where humidity, pollen, mold spores, and year-round allergens are persistent
        challenges, the air inside your home can actually be more polluted than outdoor air if
        your HVAC system isn&apos;t properly equipped and maintained.
      </p>

      <h2>Florida&apos;s Unique Indoor Air Quality Challenges</h2>
      <p>
        Several factors make Orlando and Central Florida particularly challenging for indoor air
        quality:
      </p>
      <ul>
        <li>
          <strong>Year-round humidity</strong>: Florida&apos;s average relative humidity of
          74–90% creates ideal conditions for mold and mildew growth inside HVAC systems and
          throughout living spaces.
        </li>
        <li>
          <strong>Extended pollen seasons</strong>: Unlike northern states with defined spring
          pollen seasons, Central Florida has overlapping pollen seasons nearly year-round —
          oak (Feb–April), grass (April–Oct), and ragweed (Aug–Nov).
        </li>
        <li>
          <strong>Sealed modern construction</strong>: Tightly built homes and commercial
          buildings trap indoor pollutants that older, leakier construction naturally diluted.
        </li>
        <li>
          <strong>VOC accumulation</strong>: Volatile organic compounds from cleaning products,
          paint, carpet, and furniture off-gassing are common in any home but concentrated in
          well-sealed Florida buildings.
        </li>
      </ul>

      <h2>Air Filtration: MERV Ratings Explained</h2>
      <p>
        The foundation of indoor air quality is your HVAC filter. Filters are rated by MERV
        (Minimum Efficiency Reporting Value) on a scale of 1–16 for residential use:
      </p>
      <ul>
        <li>
          <strong>MERV 1–4</strong>: Basic fiberglass filters. Catch large particles only.
          Not recommended for Florida homes.
        </li>
        <li>
          <strong>MERV 8–10</strong>: Standard pleated filters. Good balance of filtration
          and airflow. The baseline recommendation for Central Florida homes.
        </li>
        <li>
          <strong>MERV 11–13</strong>: High-efficiency pleated filters. Capture fine particles
          including most pollen, mold spores, and pet dander. Recommended for allergy sufferers.
        </li>
        <li>
          <strong>MERV 14–16</strong>: Near-HEPA filters. Capture very fine particles including
          some bacteria. Require compatible HVAC equipment — not all systems can handle the
          increased resistance.
        </li>
      </ul>
      <p>
        In Florida, we recommend <strong>MERV 8–11</strong> for most homes, changed every 3–4
        weeks during high-pollen seasons and monthly during the rest of the year.
      </p>

      <h2>UV Air Purifiers: The Florida Homeowner&apos;s Best Friend</h2>
      <p>
        Ultraviolet (UV) air purification systems installed inside your HVAC system are one of
        the most effective investments a Florida homeowner can make for indoor air quality.
        Here&apos;s why:
      </p>
      <ul>
        <li>
          UV-C light destroys mold, bacteria, and viruses — including the mold spores that
          accumulate on evaporator coils in Florida&apos;s humid conditions
        </li>
        <li>
          UV systems installed at the coil prevent mold from spreading throughout your ductwork
        </li>
        <li>
          When combined with a quality air purifier, UV systems can eliminate 99%+ of airborne
          biological contaminants
        </li>
      </ul>

      <h2>Whole-Home Dehumidification</h2>
      <p>
        In Florida, controlling humidity is arguably more important than controlling temperature
        for both comfort and air quality. When indoor relative humidity exceeds 60%, mold growth
        accelerates dramatically. A whole-home dehumidifier connected to your HVAC system
        maintains optimal 45–55% indoor humidity year-round — even on rainy days when your AC
        isn&apos;t running heavily.
      </p>
      <p>
        This is especially important for homes near lakes (including many Windermere and
        Maitland properties), homes with slab-on-grade construction, and newer airtight homes
        where natural ventilation is minimal.
      </p>

      <h2>Duct Cleaning: When Is It Necessary?</h2>
      <p>
        Your ductwork is the delivery system for everything your HVAC produces — including any
        accumulated dust, mold, and allergens. In Florida, duct cleaning is generally recommended
        every 3–5 years, or sooner if you notice visible mold growth, excessive dust, or
        musty odors from your vents. Learn more about our{" "}
        <Link href="/services/duct-cleaning" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          duct cleaning service
        </Link>
        .
      </p>

      <h2>Next Steps for Cleaner Indoor Air</h2>
      <p>
        Improving your Orlando home&apos;s indoor air quality doesn&apos;t require overhauling
        everything at once. Start with filter upgrades, schedule a professional maintenance visit
        to clean your coils and address any mold issues, then discuss UV purification and
        dehumidification options with your technician.
      </p>
      <p>
        Our{" "}
        <Link href="/services/indoor-air-quality" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          indoor air quality services
        </Link>{" "}
        cover everything from air purifiers and UV light installation to whole-home
        dehumidifiers. Call us at{" "}
        <a href="tel:+14076173510" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          (407) 617-3510
        </a>{" "}
        for a free in-home assessment.
      </p>
    </div>
  );
}

// ─── Post registry ───────────────────────────────────────────────────────────

const posts: PostContent[] = [
  {
    slug: "how-often-should-you-service-your-ac-in-florida",
    title: "How Often Should You Service Your AC in Florida?",
    category: "Maintenance",
    date: "February 15, 2026",
    readTime: "5 min read",
    metaTitle: "How Often Should You Service Your AC in Florida? | Total Service HVAC Blog",
    metaDescription:
      "Florida AC systems need twice-yearly maintenance — not once. Learn why, what each visit covers, and what skipping maintenance costs you. Expert advice from Central Florida's trusted HVAC company.",
    body: <Post1Body />,
  },
  {
    slug: "signs-your-ac-needs-replacement-orlando",
    title: "7 Signs Your AC Needs Replacement (Orlando Homeowner's Guide)",
    category: "Buying Guides",
    date: "February 8, 2026",
    readTime: "7 min read",
    metaTitle: "7 Signs Your AC Needs Replacement — Orlando Homeowner's Guide | Total Service",
    metaDescription:
      "Is your AC giving up? Learn 7 clear warning signs it's time to replace your system, plus the repair vs. replace calculation every Orlando homeowner should know.",
    body: <Post2Body />,
  },
  {
    slug: "best-ac-temperature-settings-florida-summer",
    title: "Best AC Temperature Settings for Florida Summer",
    category: "Energy Savings",
    date: "January 28, 2026",
    readTime: "4 min read",
    metaTitle: "Best AC Temperature Settings for Florida Summer | Total Service HVAC Blog",
    metaDescription:
      "What temperature should you set your AC in Florida? Learn the optimal thermostat settings for comfort, energy savings, and humidity control in Central Florida's climate.",
    body: <Post3Body />,
  },
  {
    slug: "hvac-maintenance-checklist-central-florida",
    title: "The Ultimate HVAC Maintenance Checklist for Central Florida Homes",
    category: "Maintenance",
    date: "January 15, 2026",
    readTime: "8 min read",
    metaTitle: "HVAC Maintenance Checklist for Central Florida | Total Service Air Conditioning",
    metaDescription:
      "A complete monthly, quarterly, and annual HVAC maintenance checklist designed for Central Florida's unique climate. DIY tasks and when to call a professional.",
    body: <Post4Body />,
  },
  {
    slug: "how-to-improve-indoor-air-quality-orlando",
    title: "How to Improve Indoor Air Quality in Your Orlando Home",
    category: "AC Tips",
    date: "January 5, 2026",
    readTime: "6 min read",
    metaTitle: "How to Improve Indoor Air Quality in Your Orlando Home | Total Service HVAC",
    metaDescription:
      "Orlando's humidity, pollen, and sealed construction make indoor air quality a real concern. Learn about MERV ratings, UV purifiers, dehumidification, and more.",
    body: <Post5Body />,
  },
];

// ─── Category colors ─────────────────────────────────────────────────────────

const categoryColors: Record<string, { bg: string; text: string }> = {
  Maintenance: { bg: "rgba(10,37,64,0.08)", text: "var(--color-primary)" },
  "Buying Guides": { bg: "rgba(232,98,26,0.1)", text: "var(--color-accent)" },
  "Energy Savings": { bg: "rgba(22,163,74,0.1)", text: "#16a34a" },
  "AC Tips": { bg: "rgba(37,99,235,0.1)", text: "#2563eb" },
  "Florida Climate": { bg: "rgba(234,179,8,0.1)", text: "#b45309" },
};

// ─── Next.js API ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

// ─── Page component ──────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const colors = categoryColors[post.category] ?? {
    bg: "rgba(10,37,64,0.08)",
    text: "var(--color-primary)",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: {
      "@type": "Organization",
      name: "Total Service Team",
      url: "https://totalserviceacandheat.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Total Service Air Conditioning and Heating LLC",
      url: "https://totalserviceacandheat.com",
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://totalserviceacandheat.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb + Article Header */}
      <section
        className="py-16 relative"
        style={{ background: "var(--color-primary)" }}
        aria-label="Article header"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li style={{ color: "rgba(255,255,255,0.85)" }} aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Category badge */}
          <span
            className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5"
            style={{ background: colors.bg, color: colors.text }}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div
            className="flex flex-wrap items-center gap-5 text-sm"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            <span className="flex items-center gap-2">
              <User size={14} aria-hidden="true" />
              Total Service Team
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} aria-hidden="true" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured image placeholder */}
      <div
        className="w-full h-64 md:h-80 relative"
        style={{
          background: `linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, rgba(232,98,26,0.3) 100%)`,
        }}
        role="img"
        aria-label={`Featured image for: ${post.title}`}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display text-8xl font-bold text-white opacity-10 select-none"
            aria-hidden="true"
          >
            AC
          </span>
        </div>
      </div>

      {/* Article body */}
      <article
        className="py-16"
        style={{ background: "var(--color-surface)" }}
        aria-label="Article content"
      >
        <div className="container-custom max-w-3xl mx-auto">
          {/* Prose styling injected via globals */}
          <div
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text)" }}
          >
            {post.body}
          </div>

          {/* Author bio */}
          <div
            className="mt-14 p-8 rounded-2xl flex items-start gap-6"
            style={{
              background: "white",
              border: "1.5px solid var(--color-border)",
              boxShadow: "0 4px 20px rgba(10,37,64,0.06)",
            }}
          >
            <div
              className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center font-display font-bold text-xl text-white"
              style={{ background: "var(--color-primary)" }}
              aria-hidden="true"
            >
              TS
            </div>
            <div>
              <p className="font-semibold text-base mb-1" style={{ color: "var(--color-primary)" }}>
                Total Service Team
              </p>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                The Total Service Air Conditioning &amp; Heating team has been serving Central
                Florida homeowners for over 15 years. Our NATE-certified technicians and comfort
                specialists share expert advice to help you get the most from your HVAC system.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section
          className="py-16"
          style={{ background: "white" }}
          aria-labelledby="related-posts-heading"
        >
          <div className="container-custom max-w-4xl mx-auto">
            <h2
              id="related-posts-heading"
              className="font-display text-2xl font-bold mb-8"
              style={{ color: "var(--color-primary)" }}
            >
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => {
                const relatedColors = categoryColors[related.category] ?? {
                  bg: "rgba(10,37,64,0.08)",
                  text: "var(--color-primary)",
                };
                return (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "var(--color-surface)",
                      border: "1.5px solid var(--color-border)",
                      boxShadow: "0 2px 12px rgba(10,37,64,0.05)",
                    }}
                  >
                    <span
                      className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3"
                      style={{ background: relatedColors.bg, color: relatedColors.text }}
                    >
                      {related.category}
                    </span>
                    <h3
                      className="font-display text-lg font-bold mb-2 leading-snug group-hover:text-[var(--color-accent)] transition-colors"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {related.title}
                    </h3>
                    <div
                      className="flex items-center gap-3 text-xs mb-4"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <span>{related.date}</span>
                      <span>·</span>
                      <span>{related.readTime}</span>
                    </div>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold"
                      style={{ color: "var(--color-accent)" }}
                    >
                      Read Article <ArrowRight size={13} aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-semibold transition-colors"
                style={{ color: "var(--color-primary)" }}
              >
                ← Back to All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner
        headline="Ready for Professional HVAC Service?"
        subtext="Our licensed technicians serve all of Central Florida. Same-day appointments available."
        buttonText="Get a Free Estimate"
        buttonHref="/free-estimate"
        phoneNumber="(407) 617-3510"
        variant="primary"
      />
    </>
  );
}
