import { CheckResult } from '@/shared/types';

export async function checkAriaRoles(): Promise<CheckResult> {
  const elementsWithRole = document.querySelectorAll('[role]');
  const elementsWithAria = document.querySelectorAll('[aria-label], [aria-labelledby], [aria-describedby]');

  if (elementsWithRole.length === 0 && elementsWithAria.length === 0) {
    return {
      id: 'aria_roles',
      status: 'na',
      message: 'No ARIA attributes found',
      details: 'Consider adding ARIA roles and labels for better accessibility.',
    };
  }

  // Check for invalid ARIA usage
  const validRoles = new Set([
    'alert', 'alertdialog', 'application', 'article', 'banner', 'button',
    'checkbox', 'columnheader', 'combobox', 'complementary', 'contentinfo',
    'definition', 'dialog', 'directory', 'document', 'feed', 'figure', 'form',
    'grid', 'gridcell', 'group', 'heading', 'img', 'link', 'list', 'listbox',
    'listitem', 'log', 'main', 'marquee', 'math', 'menu', 'menubar', 'menuitem',
    'menuitemcheckbox', 'menuitemradio', 'navigation', 'none', 'note', 'option',
    'presentation', 'progressbar', 'radio', 'radiogroup', 'region', 'row',
    'rowgroup', 'rowheader', 'scrollbar', 'search', 'searchbox', 'separator',
    'slider', 'spinbutton', 'status', 'switch', 'tab', 'table', 'tablist',
    'tabpanel', 'term', 'textbox', 'timer', 'toolbar', 'tooltip', 'tree',
    'treegrid', 'treeitem'
  ]);

  let invalidRoles = 0;
  elementsWithRole.forEach((el) => {
    const role = el.getAttribute('role');
    if (role && !validRoles.has(role)) {
      invalidRoles++;
    }
  });

  if (invalidRoles > 0) {
    return {
      id: 'aria_roles',
      status: 'fail',
      message: `Found ${invalidRoles} invalid ARIA role(s)`,
      details: `${elementsWithRole.length} elements use ARIA, but ${invalidRoles} have invalid roles.`,
    };
  }

  return {
    id: 'aria_roles',
    status: 'pass',
    message: 'ARIA attributes are properly used',
    details: `Found ${elementsWithRole.length} elements with roles, ${elementsWithAria.length} with ARIA labels.`,
  };
}
