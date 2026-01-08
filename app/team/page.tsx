import Link from 'next/link';
import { labMembers } from '@/data/labmembers';
import { alumni } from '@/data/alumni';
import Image from 'next/image';

export const metadata = {
  title: 'Team',
  metaTitle: 'Lab members',
};

export default function TeamPage() {
  return (
    <div className="row t30">
      <div className="medium-12 columns">
        <article>
          <header>
            <h1>Team</h1>
          </header>

          <h2>Principle Investigator</h2>
          <br />
          <Image src="images/team-bingren.jpg" alt="Bing Ren" />
          <p>
            <strong>
              <Link href="/bing/">Bing Ren, PhD.</Link>
            </strong>
          </p>
          <hr />

          <h2>Current members</h2>
          <br />
          <table>
            <tbody>
              {labMembers.map((member, idx) => (
                <tr key={idx}>
                  <td>
                    <strong>
                      {member.email ? (
                        <a href={`mailto:${member.email}`}>{member.name}</a>
                      ) : (
                        member.name
                      )}
                    </strong>
                    {member.url && (
                      <>
                        {' '}
                        <a href={member.url} target="_blank" rel="noopener noreferrer">
                          &lt;website&gt;
                        </a>
                      </>
                    )}
                  </td>
                  <td>{member.position}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <hr />

          <h2>Alumni</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Prev. Pos</th>
                <th>Year</th>
                <th>Curr. Pos</th>
              </tr>
            </thead>
            <tbody>
              {alumni.map((member, idx) => (
                <tr key={idx}>
                  <td>
                    <strong>{member.name}</strong>
                    {member.url && (
                      <>
                        {' '}
                        <a href={member.url} target="_blank" rel="noopener noreferrer">
                          &lt;website&gt;
                        </a>
                      </>
                    )}
                  </td>
                  <td>{member.prev_position}</td>
                  <td>{member.year || ''}</td>
                  <td>{member.curr_position}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>
            (Please contact website{' '}
            <a href="mailto:shz254@ucsd.edu">admin</a> to correct any mistakes or missing information.)
          </p>
        </article>
      </div>
    </div>
  );
}

