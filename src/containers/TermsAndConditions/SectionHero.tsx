import React, { FC, ReactNode } from "react";
// import ButtonPrimary from "shared/Button/ButtonPrimary";
// import Heading from "components/Heading/Heading";
export interface SectionHeroProps {
  className?: string;
  rightImg: string;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
}
const SectionHero: FC<SectionHeroProps> = ({
  className = "",
  heading,
  subHeading,
}) => {
  return (
    <div
      className={`nc-SectionHero relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full">
          <h2 className="font-semibold capitalize text-neutral-900 dark:text-white text-base">
            <span className="">Guideline and Regulations</span>
          </h2>
          <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100 pt-2">
            {heading}
          </h2>
        </div>
      </div>
      <div className="pt-10">
        {/* Terms of Use content start Here */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-2 md:text-xl dark:text-neutral-200">
            Terms of Use
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              The 'Terms of Use' represent a binding agreement between the user,
              hereafter referred to as the 'client,' and the Duomo
              Tourism LLC, hereafter referred to as the 'Agent.' The Agent,
              acting as a management company, facilitates online and walk-in
              property rentals on behalf of property owners. The following
              conditions apply:
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              By engaging in an agreement, referred to as a 'booking,' the
              client acknowledges that they are entering a binding contract. The
              client affirms their authority to represent themselves and all
              individuals within their party.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              All conditions outlined in this policy pertain to both the client
              and the client's guests.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Bookings are exclusively intended for vacation rentals. With the
              exception of infants, the number of occupants must not exceed the
              count listed on the booking form.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Only individuals listed on the booking form are permitted to
              occupy the property. The number of occupants should not exceed the
              sleeping capacity indicated on the form or website.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Once the client checks into the property, no refunds will be
              provided. Early check-outs are not eligible for refunds.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Any additional guests not listed on the booking form require prior
              permission from the Agent.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              The client and their guests, whether staying or visiting, must
              adhere to the contract conditions, including any rules,
              regulations, and procedures outlined in the information provided
              for the property.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              The client must ensure they have all necessary legal documents and
              required insurance policies during their stay in the property.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              The property is intended for residential use only. Using the
              property for business activities constitutes a breach of the
              contract and may result in immediate eviction.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Other property uses, such as for photo or video shoots or business
              conferences, must be agreed upon in writing with the Agent before
              rental.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Upon check-in, the client acknowledges they have reviewed the
              property and accepted it 'as-is.' The client holds the Agent
              harmless against any claims or indemnification related to the
              property's condition or situation.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              The client is not permitted to make any alterations to the
              property and must maintain its assets in the condition in which
              they were received at check-in.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              The client is prohibited from engaging in illegal activities or
              actions that may attract police or other authority involvement.
              The client must take all necessary security and legal measures.
            </span>
          </div>
        </div>
        {/* Payment content */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-8 md:text-xl dark:text-neutral-200">
            Payment
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              A deposit of <b>AED 2500</b> is due at the time of reservation or upon
              arrival at the property, whichever is later. Reservations are
              provisional and held for 48 hours until the deposit is received.
              Failure to make payment by the due date may result in contract
              cancellation.
            </span>
          </div>
        </div>
        {/* Cancellation and Refunds */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-8 md:text-xl dark:text-neutral-200">
            Cancellation and Refunds
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              All client cancellations, regardless of the reason, must be
              submitted in writing to Duomo Tourism LLC (the Agent) at
              the address listed on their website <b>(office@myduomo.com)</b>. Upon
              receiving written cancellation notice, the Agent reserves the
              right to immediately re-let the property for the original booking
              period.
            </span>
          </div>
        </div>
        {/* Refund Policy */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-8 md:text-xl dark:text-neutral-200">
            Refund Policy
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              <b>30+ Days:</b> Cancellations made 30 or more days before the
              reservation's start date will receive a full refund.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              <b>29 Days or Less:</b> Bookings canceled within 29 days of the
              reservation's start date are ineligible for a refund. No refunds
              will be issued in such cases.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              <b>Early Departure:</b> Clients who choose to vacate the property
              before the end date of their reservation will not receive refunds
              for unused days.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              <b>Note:</b> Clients are advised to consider Holiday Cancellation
              Insurance to safeguard against potential losses due to
              cancellations.
            </span>
          </div>
        </div>
        {/* Period of Hire */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-8 md:text-xl dark:text-neutral-200">
            Period of Hire
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              <b> Check-in time is 2:00 PM </b>(local time - Dubai, United Arab
              Emirates) on the reservation start date, and{" "}
              <b>check-out time is 12:00 PM </b>(local time - Dubai, United Arab
              Emirates) on the departure date.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Clients should coordinate with the Agent to schedule property
              possession in advance. Any changes to the scheduled time must be
              promptly communicated to ensure the Agent's personnel are
              available for check-in.
            </span>
          </div>
        </div>
        {/* Right of Entry */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-8 md:text-xl dark:text-neutral-200">
            Right of Entry
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              While respecting client privacy, there may be instances
              necessitating property access. The Agent reserves the right to
              access properties at any time for repairs or in case of
              emergencies, with prior communication to the renter.
            </span>
          </div>
        </div>
        {/* Care of Property  */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-8 md:text-xl dark:text-neutral-200">
            Care of Property
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Clients are expected to take reasonable care of the property and
              its contents, including furniture, fixtures, and fittings. The
              client must leave the property in the condition received at
              check-in, considering state of repair, cleanliness, and tidiness.
            </span>
          </div>
        </div>
        {/* Damage or Breakages  */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-8 md:text-xl dark:text-neutral-200">
            Damage or Breakages
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              A security deposit will be collected at check-in and refunded
              (minus charges for damages or missing items) at check-out. Clients
              must promptly inform the Agent of any damage or breakage within or
              around the property to allow for repair arrangements.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Clients are financially responsible for repair, replacement, or
              cleaning costs resulting from any damage, breakage, or debasement
              of the property or its contents.
            </span>
          </div>
        </div>
        {/* Rules and Regulations  */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-8 md:text-xl dark:text-neutral-200">
            Rules and Regulations
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              The Agent will provide an information folder for each property,
              outlining rules, regulations, and requirements. Clients are
              required to review and comply with the information as an addendum
              to the rental agreement.
            </span>
          </div>
        </div>
        {/* Smoking  */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-8 md:text-xl dark:text-neutral-200">
            Smoking
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Smoking is prohibited inside or near the property due to fire
              hazards. Smoking on balconies is allowed, provided cigarettes are
              properly extinguished and disposed of in ashtrays. Cigarette
              disposal on floors, grounds, lawns, or common areas is strictly
              forbidden.
            </span>
          </div>
        </div>
        {/* Pets  */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-8 md:text-xl dark:text-neutral-200">
            Pets
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Pets are not allowed in Duomo Tourism LLC properties
              without the prior consent of the Agent. If approved, dogs and cats
              are not allowed upstairs or on furniture. Pets must not be left
              unattended in the property.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              When outside, pets must be on a leash and under the control of a
              responsible adult, with waste promptly cleaned up and disposed of
              in exterior garbage bins.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Clients are responsible for any pet-related damages and associated
              repair or replacement costs. The Agent and property owners reserve
              the right to terminate the contract at any time.
            </span>
          </div>
        </div>
        {/* Liability and Hold Harmless  */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-8 md:text-xl dark:text-neutral-200">
            Liability and Hold Harmless
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Smoking is prohibited inside or near the property due to fire
              hazards. Smoking on balconies is allowed, provided cigarettes are
              properly extinguished and disposed of in ashtrays. Cigarette
              disposal on floors, grounds, lawns, or common areas is strictly
              forbidden.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Duomo Tourism LLC management is not liable for any loss or
              damage to the client's property or the personal property of the
              client's guests or visitors, irrespective of the cause.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              The client, their guests, and visitors will hold Duomo
              Tourism LLC and the property owner(s) harmless for personal injury
              or death, provided the Agent, owner(s), or their employees
              exercised reasonable care. This includes events caused by the
              fault or negligence of the affected party, acts like inadequate
              supervision of children, fault of a third party, 'Acts of God,' or
              unforeseeable events.
            </span>
          </div>
        </div>
        {/* Privacy Policy */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mt-8 md:text-xl dark:text-neutral-200">
            Privacy Policy
          </h3>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              Duomo Tourism LLC respects customer privacy and does not
              share or sell information with external parties, except when
              required by UAE law.
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              <b>Email: reservation@myduomo.com</b>
            </span>
          </div>
          <div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
              <b>Phone Number: +971-04-3349500</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
